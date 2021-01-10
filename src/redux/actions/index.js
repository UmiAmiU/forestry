export const fetchUsersStart = () => ({
  type: "FETCH_USERS_START",
});

export const fetchUsersSuccess = (data) => ({
  data,
  type: "FETCH_USERS_SUCCESS",
});

export const fetchUsersError = (error) => ({
  error,
  type: "FETCH_USERS_ERROR",
});

export const fetchUserStart = () => ({
  type: "FETCH_USER_START",
});

export const fetchUserSuccess = () => ({
  type: "FETCH_USER_SUCCESS",
});

export const fetchUserError = (error) => ({
  error,
  type: "FETCH_USER_ERROR",
});

export const auth = (id, name, level, fio, phone) => ({
  id,
  name,
  level,
  fio,
  phone,
  type: "AUTHENTICATION",
});

export const logout = () => ({
  type: "LOGOUT",
});

export const fetchTreesStart = () => ({
  type: "FETCH_TREES_START",
});

export const fetchTreesSuccess = (data) => ({
  data,
  type: "FETCH_TREES_SUCCESS",
});

export const fetchTreesError = (error) => ({
  error,
  type: "FETCH_TREES_ERROR",
});

export const addUserStart = () => ({
  type: "ADD_USER_START",
});

export const addUserSuccess = () => ({
  type: "ADD_USER_SUCCESS",
});

export const addUserError = (error) => ({
  error,
  type: "ADD_USER_ERROR",
});

export const updateUserStart = () => ({
  type: "UPDATE_USER_START",
});

export const updateUserSuccess = (fio, phone) => ({
  fio,
  phone,
  type: "UPDATE_USER_SUCCESS",
});

export const updateUserError = (error) => ({
  error,
  type: "UPDATE_USER_ERROR",
});

export const fetchOrdersStart = () => ({
  type: "FETCH_ORDERS_START",
});

export const fetchOrdersSuccess = (data) => ({
  data,
  type: "FETCH_ORDERS_SUCCESS",
});

export const fetchOrdersError = (error) => ({
  error,
  type: "FETCH_ORDERS_ERROR",
});

export const addOrderStart = () => ({
  type: "ADD_ORDER_START",
});

export const addOrderSuccess = () => ({
  type: "ADD_ORDER_SUCCESS",
});

export const addOrderError = (error) => ({
  error,
  type: "ADD_ORDER_ERROR",
});
