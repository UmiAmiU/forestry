import db from "../../db";
import {
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersError,
} from "../actions";

const fetchOrdersData = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());

    return db
      .collection("orders")
      .get()
      .then((res) => {
        const data = res.docs.map((elem) => ({
          ...elem.data(),
        }));
        console.log(data);
        dispatch(fetchOrdersSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchOrdersError(error));
      });
  };
};

export default fetchOrdersData;
