import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchOrderData from "../../redux/middlewares/fetchOrderData";
import fetchUsersData from "../../redux/middlewares/fetchUsersData";
import { Grid } from "@material-ui/core";
import OrderElem from "../OrderElem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  marginCards: {
    margin: "0px",
  },
});

const Orders = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.auth);
  if (!orders.length) {
    dispatch(fetchUsersData());
    dispatch(fetchOrderData());
  }
  return (
    <Grid container spacing={3} className={classes.marginCards}>
      {props.all
        ? orders.map((order) => (
            <OrderElem
              client={users.find((el) => el.id === order.client) || {}}
              seller={users.find((el) => el.id === order.seller) || {}}
              cost={order.cost}
              volume={order.volume}
              status={order.status}
              treeType={order.treeType}
            />
          ))
        : orders
            .filter((el) => el.client === user.id)
            .map((order) => (
              <OrderElem
                client={users.find((el) => el.id === order.client) || {}}
                seller={users.find((el) => el.id === order.seller) || {}}
                cost={order.cost}
                volume={order.volume}
                status={order.status}
              />
            ))}
    </Grid>
  );
};

export default Orders;
