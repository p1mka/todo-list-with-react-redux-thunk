const initialAppState = {
  isUpdate: false,
  isLoading: false,
  todosList: [],
};

export const appReducer = (state = initialAppState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_IS_LOADING": {
      return { ...state, isLoading: payload };
    }
    case "GET_TODOS_LIST": {
      return { ...state, todosList: payload };
    }
    case "SET_IS_UPDATE": {
      return { ...state, isUpdate: payload };
    }
    default:
      return state;
  }
};
