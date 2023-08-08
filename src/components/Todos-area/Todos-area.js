import styles from "../../App.module.css";
import { Todo } from "./Todo/Todo";

export const TodosArea = ({ sorted }) => {
  return (
    <div className={styles.todoContainer}>
      {sorted.map(({ id, title, description }) => {
        return (
          <div className={styles.todoCard} key={id}>
            <Todo id={id} title={title} description={description} />
          </div>
        );
      })}
    </div>
  );
};
