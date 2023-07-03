export const useRequestEditTodoTitle = () => {
  const requestEditTodoTitle = (id, title) => {
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: title,
      }),
    });
  };
  return requestEditTodoTitle;
};
