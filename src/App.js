import styles from "./App.module.css";
import { useRequestGetTodo } from "./hooks";
import { Navbar, TodosArea } from "./components";
import { byField } from "./features/byfield";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectEnableSort,
  selectTodosList,
  selectFinderValue,
} from "./selectors";

function App() {
  useRequestGetTodo();

  const enableSort = useSelector(selectEnableSort);
  const isLoading = useSelector(selectIsLoading);
  const todosList = useSelector(selectTodosList);
  const finderValue = useSelector(selectFinderValue);

  const finder = (finderValue) => {
    return todosList.filter(
      (value) =>
        value.title.toLowerCase().includes(finderValue.toLowerCase()) ||
        value.description.toLowerCase().includes(finderValue.toLowerCase())
    );
  };

  const filteredItems = finderValue ? finder(finderValue) : todosList;

  const sorted = enableSort
    ? filteredItems.sort(byField("title"))
    : filteredItems;

  return (
    <div className={styles.app}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={styles.container}>
          <Navbar />
          <TodosArea sorted={sorted} />
        </div>
      )}
    </div>
  );
}

export default App;
