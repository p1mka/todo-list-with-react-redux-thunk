import { useContext } from "react";
import { AppContext } from "../../../../context";
import { useRequestEditTodoDescription } from "../../../../hooks";
import { TodoAreaContext } from "../../context";
import styles from "../../../../App.module.css";

export const TodoDescription = () => {
  const { dispatch, newTodoData } = useContext(AppContext);
  const { id, description } = useContext(TodoAreaContext);

  const requestEditTodoDescription = useRequestEditTodoDescription();

  const onDescriptionChange = ({ target }) => {
    dispatch({
      type: "SET_NEW_TODO_DATA",
      payload: {
        ...newTodoData,
        description: target.value,
      },
    });
  };

  return (
    <div className={styles.todoCardDescription}>
      <input
        type="text"
        defaultValue={description}
        placeholder="Описание задачи"
        onChange={onDescriptionChange}
        onBlur={() => requestEditTodoDescription(id, newTodoData.description)}
      />
    </div>
  );
};
