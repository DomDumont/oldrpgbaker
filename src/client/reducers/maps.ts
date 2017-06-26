export const maps = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MAP':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

