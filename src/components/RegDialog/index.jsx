import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import addUser from "../../redux/middlewares/addUser";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-final-form";
import { FORM_ERROR } from "final-form";
import RegForm from "../RegForm";

const RegDialog = (props) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user);
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => props.handleClose()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Регистрация</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>Регистрация нового пользователя</DialogContentText>
          <Form
            onSubmit={async (values) => {
              await dispatch(addUser(values.name, values.password));
              if (status !== "Success" && status !== "No user") {
                return { [FORM_ERROR]: status };
              }
            }}
            validate={(values) => {
              const errors = {};
              if (values.password !== values.matchPass) {
                errors.matchPass = "Passwords don't match";
              }
              return errors;
            }}
            render={(props) => <RegForm {...props} />}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => props.handleClose()} color="primary">
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RegDialog;
