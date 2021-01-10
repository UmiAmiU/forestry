import db from "../../db";
import { addOrderStart, addOrderSuccess, addOrderError } from "../actions";
import fetchOrdersData from "./fetchOrderData";

const addOrder = (client, cost, volume, treeType) => {
  return (dispatch) => {
    dispatch(addOrderStart());
    const data = {
      client,
      cost,
      volume,
      treeType,
      status: "Payment required",
      seller: "",
    };
    return db
      .collection("orders")
      .add(data)
      .then((docRef) => {
        dispatch(addOrderSuccess());
        dispatch(fetchOrdersData());
      })
      .catch((error) => {
        dispatch(addOrderError(error.toString()));
      });
  };
};

export default addOrder;
