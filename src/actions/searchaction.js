export const searchAction = e => {
  return {
    type: "SEARCH",
    value: e.target.value
  };
};
