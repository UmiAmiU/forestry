import db from "../../db";
import { addUserStart, addUserSuccess, addUserError, auth } from "../actions";

const addUser = (name, password) => {
  return (dispatch) => {
    dispatch(addUserStart());

    return db
      .collection("users")
      .where("name", "==", name)
      .get()
      .then((res) => {
        if (!res.empty) {
          throw new Error("There such user");
        }
        const data = { name, password, level: "user", fio: "", phone: "" };
        return db
          .collection("users")
          .add(data)
          .then((docRef) => {
            dispatch(addUserSuccess());
            dispatch(
              auth(docRef.id, data.name, data.level, data.fio, data.phone)
            );
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        dispatch(addUserError(error.toString()));
      });
  };
};

export default addUser;
