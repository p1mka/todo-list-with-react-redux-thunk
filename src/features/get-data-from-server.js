export const getDataFromServer = () =>
  fetch("http://localhost:3005/todos")
    .then((loadedData) => loadedData.json())
    .then((loadedTodos) => loadedTodos);
