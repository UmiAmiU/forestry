import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import addOrder from "../../redux/middlewares/addOrder";
import { useDispatch, useSelector } from "react-redux";
import OrderElem from "../OrderElem";

const RegDialog = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => props.handleClose()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Регистрация</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>Новый заказ</DialogContentText>
          <div style={{ width: "100%" }}>
            <OrderElem
              client={user}
              seller={{}}
              cost={props.cost}
              volume={props.volume}
              status={"Payment required"}
              treeType={props.treeType}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              dispatch(
                addOrder(user.id, props.cost, props.volume, props.treeType)
              );
              props.handleClose();
            }}
            color="primary"
          >
            Подтвердить
          </Button>
          <Button onClick={() => props.handleClose()} color="primary">
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RegDialog;
