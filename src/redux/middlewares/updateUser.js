import db from "../../db";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserError,
} from "../actions";

const updateUser = (id, fio, phone) => {
  return (dispatch) => {
    dispatch(updateUserStart());

    return db
      .collection("users")
      .doc(id)
      .update({ fio, phone })
      .then(() => {
        dispatch(updateUserSuccess(fio, phone));
      })
      .catch((error) => {
        dispatch(updateUserError(error.toString()));
      });
  };
};

export default updateUser;
