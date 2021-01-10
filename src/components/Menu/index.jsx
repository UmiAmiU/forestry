import React from "react";
import {
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import AuthDialog from "../AuthDialog";
import RegDialog from "../RegDialog";

const useStyles = makeStyles({
  navig: {
    width: 400,
    height: 60,
  },
  title: {
    flexGrow: 1,
  },
});

const Menu = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [authOpen, setAuthOpen] = React.useState(false);
  const [regOpen, setRegOpen] = React.useState(false);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const butBlock = user.logged ? (
    <React.Fragment>
      <Typography variant="body1">Добро пожаловать, {user.name}</Typography>
      <Button
        color="inherit"
        component={Link}
        to="/UserArea"
        onClick={() => setValue(4)}
      >
        Личный кабинет
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/Orders"
        onClick={() => setValue(4)}
      >
        Личные заказы
      </Button>
      <Button
        color="inherit"
        onClick={() => {
          dispatch(logout());
          setAuthOpen(false);
          setValue(0);
        }}
        component={Link}
        to="/"
      >
        Logout
      </Button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Button color="inherit" onClick={() => setRegOpen(true)}>
        Register
      </Button>
      <Button color="inherit" onClick={() => setAuthOpen(true)}>
        Login
      </Button>
      <AuthDialog open={authOpen} handleClose={() => setAuthOpen(false)} />
      <RegDialog open={regOpen} handleClose={() => setRegOpen(false)} />
    </React.Fragment>
  );

  return (
    <Grid item xs={12}>
      <AppBar position="static">
        <Toolbar>
          <Box m={1}>
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              className={classes.navig}
            >
              <BottomNavigationAction label="Главная" component={Link} to="/" />
              <BottomNavigationAction
                label="Карта"
                component={Link}
                to="/Map"
              />
              <BottomNavigationAction
                label="Расчет данных"
                component={Link}
                to="/Calculate"
              />
              {user.logged && (
                <BottomNavigationAction
                  label="Все заказы"
                  component={Link}
                  to="/OrdersAll"
                />
              )}
            </BottomNavigation>
          </Box>
          <Typography className={classes.title}></Typography>
          {butBlock}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Menu;
