const initialNewTodoDataState = {
  title: "",
  description: "",
};

export const newTodoDataReducer = (state = initialNewTodoDataState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_NEW_TODO_DATA_TITLE": {
      return {
        ...state,
        title: payload,
      };
    }

    case "SET_NEW_TODO_DATA_DESCRIPTION": {
      return {
        ...state,
        description: payload,
      };
    }

    default:
      return state;
  }
};
