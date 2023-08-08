import { TodoTitle } from "./Todo-title/Todo-title";
import { TodoDescription } from "./Todo-description/Todo-description";

export const Todo = ({ id, title, description }) => {
  return (
    <div>
      <TodoTitle id={id} title={title} />
      <TodoDescription id={id} description={description} />
    </div>
  );
};
