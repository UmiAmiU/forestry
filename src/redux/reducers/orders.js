const orders = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ORDERS_START": {
      return state;
    }
    case "FETCH_ORDERS_SUCCESS": {
      return [...action.data];
    }
    case "FETCH_ORDERS_ERROR": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default orders;
