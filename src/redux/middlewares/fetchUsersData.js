import db from "../../db";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersError,
} from "../actions";

const fetchUsersData = () => {
  return (dispatch) => {
    dispatch(fetchUsersStart());

    return db
      .collection("users")
      .get()
      .then((res) => {
        const data = res.docs.map((elem) => ({
          id: elem.id,
          ...elem.data(),
        }));
        dispatch(fetchUsersSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUsersError(error));
      });
  };
};

export default fetchUsersData;
