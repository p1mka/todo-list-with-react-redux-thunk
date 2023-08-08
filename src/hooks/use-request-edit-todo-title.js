export const useRequestEditTodoTitle = (id, title) => {
  const requestEditTodoTitle = () => {
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: title,
      }),
    });
  };
  return { requestEditTodoTitle };
};
