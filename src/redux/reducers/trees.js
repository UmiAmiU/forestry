const trees = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TREES_START": {
      return [];
    }
    case "FETCH_TREES_SUCCESS": {
      return [...action.data];
    }
    case "FETCH_TREES_ERROR": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default trees;
