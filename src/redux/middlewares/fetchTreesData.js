import db from "../../db";
import {
  fetchTreesStart,
  fetchTreesSuccess,
  fetchTreesError
} from "../actions";

const fetchTreesData = () => {
  return dispatch => {
    dispatch(fetchTreesStart());

    return db
      .collection("trees")
      .get()
      .then(res => {
        const data = res.docs.map(elem => ({
          ...elem.data()
        }));
        console.log(data);
        dispatch(fetchTreesSuccess(data));
      })
      .catch(error => {
        dispatch(fetchTreesError(error));
      });
  };
};

export default fetchTreesData;
