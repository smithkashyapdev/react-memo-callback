const INITIAL_STATE = {
  count: 0,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        ...action.content,
      };

    case 'INCREMENT':
      return {
        ...state,
      };

    case 'DECREMENT':
      return {
        ...state,
      };
    default:
      return state;
  }
};
