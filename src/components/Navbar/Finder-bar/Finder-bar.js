import styles from "./Finder-block.module.css";
import { useContext } from "react";
import { AppContext } from "../../../context";

export const FinderBar = () => {
  const { finderValue, dispatch } = useContext(AppContext);

  const onFinderValueChange = ({ target }) => {
    dispatch({ type: "SET_FINDER_VALUE", payload: target.value });
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
