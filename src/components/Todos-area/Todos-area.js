import React, { useContext } from "react";
import styles from "../../App.module.css";
import { AppContext } from "../../context";
import { Todo } from "./Todo/Todo";
import { TodoAreaContext } from "./context";

export const TodosArea = () => {
  const { sorted } = useContext(AppContext);

  return (
    <div className={styles.todoContainer}>
      {sorted.map(({ id, title, description }) => {
        return (
          <div className={styles.todoCard} key={id}>
            <TodoAreaContext.Provider value={{ id, title, description }}>
              <Todo />
            </TodoAreaContext.Provider>
          </div>
        );
      })}
    </div>
  );
};
