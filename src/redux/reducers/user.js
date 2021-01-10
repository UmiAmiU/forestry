const user = (state = "No user", action) => {
  switch (action.type) {
    case "FETCH_USER_START": {
      return state;
    }
    case "FETCH_USER_SUCCESS": {
      return "Success";
    }
    case "FETCH_USER_ERROR": {
      return action.error;
    }
    case "ADD_USER_START": {
      return state;
    }
    case "ADD_USER_SUCCESS": {
      return "Success";
    }
    case "ADD_USER_ERROR": {
      return action.error;
    }
    case "UPDATE_USER_START": {
      return state;
    }
    case "UPDATE_USER_SUCCESS": {
      return "Success";
    }
    case "UPDATE_USER_ERROR": {
      return action.error;
    }
    case "LOGOUT": {
      return "No user";
    }
    default: {
      return state;
    }
  }
};

export default user;
