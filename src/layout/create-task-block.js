import { useRequestAddTodo } from "../hooks";

export const TaskBlockLayout = () => {
  const { requestAddTodo } = useRequestAddTodo();

  return (
    <button type="submit" onClick={requestAddTodo}>
      +
    </button>
  );
};
