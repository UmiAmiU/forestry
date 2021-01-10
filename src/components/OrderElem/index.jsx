import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  fullWidth: {
    width: "40vw",
  },
});

const OrderElem = (props) => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  return (
    <Grid item xs={6} className={classes.fullWidth}>
      <Card variant="outlined" className={classes.fullWidth}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Заказ на покупку древесины обьемом: {props.volume}м
            <sup>
              <small>3</small>
            </sup>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Вид древесины: {props.treeType}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Заказчик: {props.client.fio ? props.client.fio : ""} Продавец:
            {props.seller.fio ? props.seller.fio : "Нет принявшего"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Статус: {props.status}
          </Typography>
          <Typography variant="h6">Стоимость: {props.cost}</Typography>
        </CardContent>
        <CardActions>
          {user.id !== props.client.id && user.id !== props.seller.id && (
            <Button size="small">Принять заказ</Button>
          )}
          {user.id === props.client.id &&
            props.status === "Payment required" && (
              <Button size="small">Оплатить</Button>
            )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default OrderElem;
