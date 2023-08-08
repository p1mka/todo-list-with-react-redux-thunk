export const useRequestEditTodoDescription = (id, description) => {
  const requestEditTodoDescription = () => {
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        description: description,
      }),
    });
  };
  return { requestEditTodoDescription };
};
