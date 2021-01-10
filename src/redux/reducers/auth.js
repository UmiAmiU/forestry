const auth = (
  state = { id: "", name: "", level: "", fio: "", phone: "", logged: false },
  action
) => {
  switch (action.type) {
    case "AUTHENTICATION": {
      return {
        id: action.id,
        name: action.name,
        level: action.level,
        fio: action.fio,
        phone: action.phone,
        logged: true,
      };
    }
    case "LOGOUT": {
      return { id: "", name: "", level: "", fio: "", phone: "", logged: false };
    }
    case "UPDATE_USER_SUCCESS": {
      return { ...state, fio: action.fio, phone: action.phone };
    }
    default: {
      return state;
    }
  }
};

export default auth;
