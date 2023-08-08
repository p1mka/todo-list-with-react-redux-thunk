import { useDispatch, useSelector } from "react-redux";
import { setIsUpdate } from "../actions";
import { selectIsUpdate } from "../selectors";

export const useRequestAddTodo = () => {
  const isUpdate = useSelector(selectIsUpdate);
  const dispatch = useDispatch();

  const requestAddTodo = () => {
    fetch("http://localhost:3005/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: "",
        description: "",
      }),
    }).then(() => {
      dispatch(setIsUpdate(!isUpdate));
    });
  };

  return { requestAddTodo };
};
