import { useContext } from "react";
import styles from "../../App.module.css";
import { AppContext } from "../../context";
import { TaskBlockLayout } from "../../layout";
import { FinderBar } from "./Finder-bar/Finder-bar";

export const Navbar = () => {
  const { enableSort, isUpdate, dispatch } = useContext(AppContext);

  const onSortButtonClick = () => {
    dispatch({ type: "SET_ENABLE_SORT", payload: !enableSort });
    dispatch({ type: "SET_IS_UPDATE", payload: !isUpdate });
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
