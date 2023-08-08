import styles from "../../../../App.module.css";
import {
  useRequestDeleteTodo,
  useRequestEditTodoTitle,
} from "../../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { selectNewTodoData } from "../../../../selectors";
import { setNewTodoDataTitle } from "../../../../actions";

export const TodoTitle = ({ id, title }) => {
  const dispatch = useDispatch();
  const newTodoData = useSelector(selectNewTodoData);

  const { requestDeleteTodo } = useRequestDeleteTodo(id, title);
  const { requestEditTodoTitle } = useRequestEditTodoTitle(
    id,
    newTodoData.title
  );
  const onTitleChange = ({ target }) =>
    dispatch(setNewTodoDataTitle(target.value));

  return (
    <div className={styles.title}>
      <button onClick={requestDeleteTodo}>🗑</button>
      <input
        type="text"
        defaultValue={title}
        placeholder="Заголовок"
        onChange={onTitleChange}
        onBlur={requestEditTodoTitle}
      />
    </div>
  );
};
