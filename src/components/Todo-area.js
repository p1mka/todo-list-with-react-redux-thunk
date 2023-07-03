// import React from "react";

// const todoArea = () => {
//   return (
//     <div className={styles.todoCard} key={id}>
//       <div className={styles.title}>
//         <button
//           className={styles.removeButton}
//           onClick={() => {
//             requestDeleteTodo(id, title);
//           }}
//         >
//           x
//         </button>
//         <input
//           type="text"
//           defaultValue={title}
//           onChange={({ target }) => {
//             setShowSaveButton(true);
//             setNewTodoData({
//               ...newTodoData,
//               title: target.value,
//             });
//           }}
//         />
//       </div>
//       <div className={styles.todoCardDescription}>
//         <input
//           type="text"
//           defaultValue={description}
//           onChange={({ target }) => {
//             setShowSaveButton(true);
//             setNewTodoData({
//               ...newTodoData,
//               description: target.value,
//             });
//           }}
//         />
//       </div>
//       <button
//         id="saveButton"
//         className={
//           showSaveButton ? styles.saveButton : styles.saveButtonInvisible
//         }
//         onClick={() => {
//           setShowSaveButton(false);
//           requestEditTodo(id, newTodoData.title, newTodoData.description);
//           setIsUpdate(!isUpdate);
//         }}
//       >
//         Сохранить
//       </button>
//     </div>
//   );
// };

// export default Todo - area;
