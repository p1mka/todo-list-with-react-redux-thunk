const initialNavBarState = {
  sortIsEnable: false,
  finderValue: "",
};

export const navBarReducer = (state = initialNavBarState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ENABLE_SORT": {
      return { ...state, sortIsEnable: payload };
    }

    case "SET_FINDER_VALUE": {
      return { ...state, finderValue: payload };
    }
    default:
      return state;
  }
};
