import db from "../../db";
import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserError,
  auth,
} from "../actions";

const fetchUser = (name, password) => {
  return (dispatch) => {
    dispatch(fetchUserStart());

    return db
      .collection("users")
      .where("name", "==", name)
      .where("password", "==", password)
      .get()
      .then((res) => {
        if (res.empty) {
          throw new Error("No such user");
        }
        const data = { ...res.docs[0].data() };
        dispatch(
          auth(res.docs[0].id, data.name, data.level, data.fio, data.phone)
        );
        dispatch(fetchUserSuccess());
      })
      .catch((error) => {
        dispatch(fetchUserError(error.toString()));
      });
  };
};

export default fetchUser;
