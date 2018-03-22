export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.userName
      ];
    default:
      return state;
  }
};
