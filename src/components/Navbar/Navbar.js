import { useDispatch, useSelector } from "react-redux";
import styles from "../../App.module.css";
import { TaskBlockLayout } from "../../layout";
import { selectIsUpdate } from "../../selectors";
import { selectEnableSort } from "../../selectors/select-enable-sort";
import { FinderBar } from "./Finder-bar/Finder-bar";
import { setEnableSort, setIsUpdate } from "../../actions";

export const Navbar = () => {
  const enableSort = useSelector(selectEnableSort);
  const isUpdate = useSelector(selectIsUpdate);
  const dispatch = useDispatch();

  const onSortButtonClick = () => {
    dispatch(setEnableSort(!enableSort));
    dispatch(setIsUpdate(!isUpdate));
  };

  return (
    <div className={styles.inputBlock}>
      <h1>TODO List</h1>
      <TaskBlockLayout />
      <div className={styles.subContainer}>
        <FinderBar />
        <button className={styles.sortButton} onClick={onSortButtonClick}>
          {!enableSort ? `Сортировать по алфавиту` : `Сортировать по порядку`}
        </button>
      </div>
    </div>
  );
};
