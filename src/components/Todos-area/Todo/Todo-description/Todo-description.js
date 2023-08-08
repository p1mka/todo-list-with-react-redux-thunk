import { useRequestEditTodoDescription } from "../../../../hooks";
import styles from "../../../../App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNewTodoData } from "../../../../selectors";
import { setNewTodoDataDescription } from "../../../../actions";

export const TodoDescription = ({ id, description }) => {
  const dispatch = useDispatch();
  const newTodoData = useSelector(selectNewTodoData);

  const { requestEditTodoDescription } = useRequestEditTodoDescription(
    id,
    newTodoData.description
  );

  const onDescriptionChange = ({ target }) => {
    dispatch(setNewTodoDataDescription(target.value));
  };

  return (
    <div className={styles.todoCardDescription}>
      <input
        type="text"
        defaultValue={description}
        placeholder="Описание задачи"
        onChange={onDescriptionChange}
        onBlur={requestEditTodoDescription}
      />
    </div>
  );
};
