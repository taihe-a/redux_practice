const reducer = (state = 1, action) => {
  switch (action.type) {
    case "PLUS":
      return state + action.payload.num;
    default:
      return state;
  }
};
export default reducer;
