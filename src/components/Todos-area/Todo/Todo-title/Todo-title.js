import { useContext } from "react";
import styles from "../../../../App.module.css";
import { AppContext } from "../../../../context";
import { TodoAreaContext } from "../../context";
import { useRequestDeleteTodo } from "../../../../hooks";
import { useRequestEditTodoTitle } from "../../../../hooks";

export const TodoTitle = () => {
  const { dispatch, newTodoData } = useContext(AppContext);
  const { id, title } = useContext(TodoAreaContext);

  const requestDeleteTodo = useRequestDeleteTodo();
  const requestEditTodoTitle = useRequestEditTodoTitle();

  const onTitleChange = ({ target }) =>
    dispatch({
      type: "SET_NEW_TODO_DATA",
      payload: {
        ...newTodoData,
        title: target.value,
      },
    });

  return (
    <div className={styles.title}>
      <button
        onClick={() => {
          requestDeleteTodo(id, title);
        }}
      >
        🗑
      </button>
      <input
        type="text"
        defaultValue={title}
        placeholder="Заголовок"
        onChange={onTitleChange}
        onBlur={() => requestEditTodoTitle(id, newTodoData.title)}
      />
    </div>
  );
};
