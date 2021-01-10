import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import fetchUser from "../../redux/middlewares/fetchUser";
import { Form } from "react-final-form";
import { FORM_ERROR } from "final-form";
import AuthForm from "../AuthForm";

const AuthDialog = (props) => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.logged);
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => props.handleClose()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Вход</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Чтобы войти, введите свой логин и пароль
          </DialogContentText>
          <Form
            onSubmit={async (values) => {
              await dispatch(fetchUser(values.name, values.password));
              if (!logged) {
                return { [FORM_ERROR]: "Login Failed" };
              }
            }}
            render={(props) => <AuthForm {...props} />}
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

export default AuthDialog;
