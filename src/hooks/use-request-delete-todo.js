import { useDispatch, useSelector } from "react-redux";
import { setIsUpdate } from "../actions";
import { selectIsUpdate } from "../selectors";

export const useRequestDeleteTodo = (id, title) => {
  const dispatch = useDispatch();
  const isUpdate = useSelector(selectIsUpdate);

  const requestDeleteTodo = () => {
    let answer = window.confirm(`Удалить задачу ${title}?`);
    if (answer) {
      fetch(`http://localhost:3005/todos/${id}`, {
        method: "DELETE",
      });
      dispatch(setIsUpdate(!isUpdate));
    } else {
      return null;
    }
  };
  return { requestDeleteTodo };
};
