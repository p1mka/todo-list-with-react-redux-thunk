export const useRequestDeleteTodo = () => {
  const requestDeleteTodo = (id, title, isUpdate, setIsUpdate) => {
    let answer = window.confirm(`Удалить задачу ${title}?`);
    if (answer) {
      fetch(`http://localhost:3005/todos/${id}`, {
        method: "DELETE",
      }).then(() => setIsUpdate(!isUpdate));
    } else {
      return null;
    }
  };
  return requestDeleteTodo;
};
