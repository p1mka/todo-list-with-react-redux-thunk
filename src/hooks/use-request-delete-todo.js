import { useContext } from "react";
import { AppContext } from "../context";

export const useRequestDeleteTodo = () => {
  const { isUpdate, dispatch } = useContext(AppContext);
  const requestDeleteTodo = (id, title) => {
    let answer = window.confirm(`Удалить задачу ${title}?`);
    if (answer) {
      fetch(`http://localhost:3005/todos/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "SET_IS_UPDATE", payload: !isUpdate });
      // .then(() => );
    } else {
      return null;
    }
  };
  return requestDeleteTodo;
};
