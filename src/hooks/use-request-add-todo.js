export const useRequestAddTodo = (
  setIsLoading,
  newTodoData,
  setNewTodoData,
  setIsUpdate,
  isUpdate
) => {
  const createTodo = () => {
    requestAddTodo();
  };
  const requestAddTodo = () => {
    setIsLoading(true);
    setNewTodoData({ ...newTodoData, title: "", description: "" });
    fetch("http://localhost:3005/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: "",
        description: "",
      }),
    })
      .then(() => {
        setIsUpdate(!isUpdate);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return createTodo;
};
