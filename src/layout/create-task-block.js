export const TaskBlockLayout = ({ createTodo }) => {
  return (
    <button type="submit" onClick={createTodo}>
      Создать новую задачу
    </button>
  );
};
