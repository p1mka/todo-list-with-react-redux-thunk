import styles from "./App.module.css";
import { useState } from "react";
import {
  useRequestGetTodo,
  useRequestAddTodo,
  useRequestDeleteTodo,
  useRequestEditTodoTitle,
  useRequestEditTodoDescription,
} from "./hooks";
import { TaskBlockLayout, FinderLayout } from "./layout";

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
  const requestEditTodoTitle = useRequestEditTodoTitle();
  const requestEditTodoDescription = useRequestEditTodoDescription();
  const requestDeleteTodo = useRequestDeleteTodo();

  const finder = (finderValue) => {
    return todosList.filter(
      (value) =>
        value.title.toLowerCase().includes(finderValue.toLowerCase()) ||
        value.description.toLowerCase().includes(finderValue.toLowerCase())
    );
  };
  const filteredItems = finderValue ? finder(finderValue) : todosList;

  function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  const sorted = enableSort
    ? filteredItems.sort(byField("title"))
    : filteredItems;

  return (
    <div className={styles.app}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.inputBlock}>
            <TaskBlockLayout createTodo={createTodo} />
            <h1>TODO List</h1>
            <FinderLayout
              finderValue={finderValue}
              setFinderValue={setFinderValue}
            />
          </div>
          <button
            className={styles.sortButton}
            onClick={() => {
              setEnableSort(!enableSort);
              setIsUpdate(!isUpdate);
            }}
          >
            {!enableSort ? `Сортировать по алфавиту` : `Сортировать по порядку`}
          </button>
          {
            <div className={styles.todoContainer}>
              {filteredItems.map(({ id, title, description }) => {
                return (
                  <div className={styles.todoCard} key={id}>
                    <div className={styles.title}>
                      <button
                        className={styles.removeButton}
                        onClick={() => {
                          requestDeleteTodo(id, title, isUpdate, setIsUpdate);
                        }}
                      >
                        x
                      </button>
                      <input
                        type="text"
                        defaultValue={title}
                        placeholder="Заголовок"
                        onChange={({ target }) => {
                          setNewTodoData({
                            ...newTodoData,
                            title: target.value,
                          });
                        }}
                        onBlur={() =>
                          requestEditTodoTitle(id, newTodoData.title)
                        }
                      />
                    </div>
                    <div className={styles.todoCardDescription}>
                      <input
                        type="text"
                        defaultValue={description}
                        placeholder="Описание задачи"
                        onChange={({ target }) => {
                          setNewTodoData({
                            ...newTodoData,
                            description: target.value,
                          });
                        }}
                        onBlur={() =>
                          requestEditTodoDescription(
                            id,
                            newTodoData.description
                          )
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      )}
    </div>
  );
}

export default App;
