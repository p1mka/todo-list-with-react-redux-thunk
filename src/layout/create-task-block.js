import { useContext } from "react";
import { AppContext } from "../context";

export const TaskBlockLayout = () => {
  const { createTodo } = useContext(AppContext);

  return (
    <button type="submit" onClick={createTodo}>
      +
    </button>
  );
};
