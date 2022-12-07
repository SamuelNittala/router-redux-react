const initState = {
  count: 0,
};
const countReducer = (
  state = initState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default countReducer;
