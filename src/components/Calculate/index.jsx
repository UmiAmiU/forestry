import React from "react";
import { Grid, AppBar, Tabs, Tab, Box, Typography } from "@material-ui/core";
import TabPanel from "../TabPanel";
import Plant from "../Plant";
import Cutdown from "../Cutdown";
import { useSelector, useDispatch } from "react-redux";
import fetchTreesData from "../../redux/middlewares/fetchTreesData";

const Calculate = () => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.logged);
  const trees = useSelector((state) => state.trees);

  const handleChange = (event, newValue) => {
    if (newValue === 1 && !trees.length) {
      dispatch(fetchTreesData());
    }
    setValue(newValue);
  };

  const blocks = logged ? (
    <React.Fragment>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Расчет посадок" {...apllyProps(0)} />
          <Tab label="Расчет вырубки" {...apllyProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Plant />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Cutdown />
      </TabPanel>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Typography variant="h4" align="center">
        Для использования расчетных таблиц
      </Typography>
      <Typography variant="h6" align="center">
        Вы должны зарегистрироватся или войти
      </Typography>
    </React.Fragment>
  );

  return (
    <Grid item xs>
      <Box mt={1}>{blocks}</Box>
    </Grid>
  );
};

function apllyProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default Calculate;
