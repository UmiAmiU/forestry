import React from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import updateUser from "../../redux/middlewares/updateUser";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  paperP: {
    padding: 20,
  },
  mxW: {
    width: "100%",
  },
});

const UserArea = () => {
  const classes = useStyles();
  const [change, setChange] = React.useState(false);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    fio: user.fio,
    phone: user.phone,
  });
  const handleChange = (prop) => (event) => {
    const newState = { ...values, [prop]: event.target.value };
    setValues(newState);
  };

  return (
    <Grid item className={classes.mxW}>
      {!user.logged && <Redirect to="/" />}
      <Box m={1}>
        <Paper variant="outlined" elevation={3} className={classes.paperP}>
          <Typography gutterBottom variant="h4">
            Персональные данные
          </Typography>
        </Paper>
      </Box>
      <Box m={1}>
        <Paper variant="outlined" elevation={3} className={classes.paperP}>
          <Typography gutterBottom variant="h6">
            Фамилия, Имя и Отчество:
          </Typography>
          <Typography gutterBottom variant="body1">
            {user.fio || "Нажмите кнопку 'Изменить', чтобы ввести данные"}
          </Typography>
        </Paper>
      </Box>
      <Box m={1}>
        <Paper variant="outlined" elevation={3} className={classes.paperP}>
          <Typography gutterBottom variant="h6">
            Мобильный телефон
          </Typography>
          <Typography gutterBottom variant="body1">
            {user.phone || "Нажмите кнопку 'Изменить', чтобы ввести данные"}
          </Typography>
        </Paper>
      </Box>
      <Box m={1}>
        {change ? (
          <Button
            variant="outlined"
            onClick={() => {
              if (values.fio !== user.fio || values.phone !== user.phone) {
                dispatch(updateUser(user.id, values.fio, values.phone));
              }
              setChange(false);
            }}
          >
            Сохранить изменения
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={() => {
              setChange(true);
            }}
          >
            Изменить
          </Button>
        )}
      </Box>
      {change && (
        <React.Fragment>
          <Box m={1}>
            <Paper variant="outlined" elevation={3} className={classes.paperP}>
              <TextField
                id="fio"
                label="Фамилия,Имя,Отчество"
                onChange={handleChange("fio")}
                fullWidth
              />
            </Paper>
          </Box>
          <Box m={1}>
            <Paper variant="outlined" elevation={3} className={classes.paperP}>
              <TextField
                id="phone"
                label="Мобильный телефон"
                onChange={handleChange("phone")}
                fullWidth
              />
            </Paper>
          </Box>
        </React.Fragment>
      )}
    </Grid>
  );
};

export default UserArea;
