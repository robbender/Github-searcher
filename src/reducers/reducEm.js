let reducEm = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_REPOS":
      return {...state, repos: action.payload};
    default:
      return state;
  }
};

export default reducEm;
