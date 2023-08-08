import styles from "./Finder-block.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFinderValue } from "../../../selectors";
import { setFinderValue } from "../../../actions";

export const FinderBar = () => {
  const dispatch = useDispatch();
  const finderValue = useSelector(selectFinderValue);

  const onFinderValueChange = ({ target }) => {
    dispatch(setFinderValue(target.value));
  };

  return (
    <div className={styles.finderBlock}>
      <input
        id="searchTodo"
        type="search"
        placeholder="Поиск по задачам"
        value={finderValue}
        onChange={onFinderValueChange}
      />
    </div>
  );
};
