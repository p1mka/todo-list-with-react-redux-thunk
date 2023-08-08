import { getDataFromServer } from "./features/get-data-from-server";

export const setFinderValue = (finderValue) => ({
  type: "SET_FINDER_VALUE",
  payload: finderValue,
});

export const setEnableSort = (isSortEnabled) => ({
  type: "SET_ENABLE_SORT",
  payload: isSortEnabled,
});

export const setIsUpdate = (isUpdate) => ({
  type: "SET_IS_UPDATE",
  payload: isUpdate,
});

export const setNewTodoDataTitle = (title) => ({
  type: "SET_NEW_TODO_DATA_TITLE",
  payload: title,
});

export const setNewTodoDataDescription = (description) => ({
  type: "SET_NEW_TODO_DATA_DESCRIPTION",
  payload: description,
});

export const getTodosList = (todos) => ({
  type: "GET_TODOS_LIST",
  payload: todos,
});

export const setIsLoading = (isLoading) => ({
  type: "SET_IS_LOADING",
  payload: isLoading,
});

export const fetchData = () => (dispatch) =>
  getDataFromServer().then((data) => dispatch(getTodosList(data)));
