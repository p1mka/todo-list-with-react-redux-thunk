import styles from "./App.module.css";
import { useState } from "react";
import { useRequestGetTodo, useRequestAddTodo } from "./hooks";
import { AppContext } from "./context";
import { Navbar, TodosArea } from "./components";
import { byField } from "./features/byfield";

function App() {
  const [todosList, setTodosList] = useState([]);
  const [newTodoData, setNewTodoData] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [finderValue, setFinderValue] = useState("");
  const [enableSort, setEnableSort] = useState(false);

  useRequestGetTodo(setIsLoading, setTodosList, isUpdate);

  const createTodo = useRequestAddTodo(
    setIsLoading,
    newTodoData,
    setNewTodoData,
    setIsUpdate,
    isUpdate
  );

  const dispatch = (action) => {
    const { type, payload } = action;
    switch (type) {
      case "SET_ENABLE_SORT": {
        setEnableSort(payload);
        break;
      }
      case "SET_IS_LOADING": {
        setIsLoading(payload);
        break;
      }
      case "SET_FINDER_VALUE": {
        setFinderValue(payload);
        break;
      }
      case "SET_NEW_TODO_DATA": {
        setNewTodoData(payload);
        break;
      }
      case "SET_IS_UPDATE": {
        setIsUpdate(payload);
        break;
      }
      default:
    }
  };
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
          <AppContext.Provider
            value={{
              newTodoData,
              finderValue,
              sorted,
              createTodo,
              enableSort,
              isUpdate,
              dispatch,
            }}
          >
            <Navbar />
            <TodosArea />
          </AppContext.Provider>
        </div>
      )}
    </div>
  );
}

export default App;
