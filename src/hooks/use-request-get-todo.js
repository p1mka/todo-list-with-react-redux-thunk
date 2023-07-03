import { useEffect } from "react";

export const useRequestGetTodo = (setIsLoading, setTodosList, isUpdate) => {
  // const { setIsLoading, setTodosList, isUpdate } = props;

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3005/todos")
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => setTodosList(loadedTodos))
      .finally(() => setIsLoading(false));
  }, [isUpdate]);

  // return isUpdate;
};
