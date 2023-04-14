var initialData = {
    name: "kabir",
  };
  const myReducer = (storedata = initialData, action) => {
    if (action.type === "name") {
      return {
        name: action.username,
      };
    }
    return storedata;
  };

export default myReducer;

