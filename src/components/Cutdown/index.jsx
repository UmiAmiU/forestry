import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import OrderDialog from "../OrderDialog";

const useStyles = makeStyles({
  formControl: {
    minWidth: 120,
    width: "100%",
  },
});

const Cutdown = () => {
  const classes = useStyles();
  const trees = useSelector((state) => state.trees);
  const selectOpt = trees.map((tree) => tree.type);
  const user = useSelector((state) => state.auth);
  const marks = trees.length
    ? Object.keys(trees[0].size).map((key) => ({
        value: Number.parseInt(key),
        label: `${key}см`,
      }))
    : [];
  const [orderOpen, setOrderOpen] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [values, setValues] = React.useState({
    count: 0,
    dmtr: "",
    type: "",
  });
  const [result, setResult] = React.useState({
    trunk: 0,
    crown: 0,
    general: 0,
  });
  const calcRes = (newState) => {
    if (newState.count && newState.dmtr && newState.type) {
      const tree = trees.filter((tree) => tree.type === newState.type)[0];
      setResult({
        trunk: tree.size[newState.dmtr].trunk,
        crown: tree.size[newState.dmtr].crown,
        general:
          tree.size[newState.dmtr].trunk + tree.size[newState.dmtr].crown,
      });
    }
  };
  const handleChange = (prop) => (event) => {
    const newState = { ...values, [prop]: event.target.value };
    setValues(newState);
    calcRes(newState);
  };
  const handleSliderChange = (event, newValue) => {
    const newState = { ...values, dmtr: newValue };
    setValues(newState);
    calcRes(newState);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Введите данные для расчета</Typography>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <InputLabel id="treetype-label">Вид дерева</InputLabel>
          <Select
            labelId="treetype-label"
            id="treetype"
            value={values.type}
            onChange={handleChange("type")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {selectOpt.map((tree) => (
              <MenuItem key={tree} value={tree}>
                {tree}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="count"
          label="Количество деревьев"
          type="number"
          onChange={handleChange("count")}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Typography id="diametr-slider" gutterBottom>
          Диаметр ствола в см на высоте 1.3м
        </Typography>
        <Slider
          aria-labelledby="diametr-slider"
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
          min={8}
          max={40}
          defaultValue={16}
          step={4}
          marks={marks}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">
          Кубических метров древесины со ствола: ~
          {Number.parseFloat(values.count)
            ? (result.trunk * Number.parseFloat(values.count)).toFixed(2)
            : 0}
          м
          <sup>
            <small>3</small>
          </sup>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">
          Кубических метров древесины с кроны: ~
          {Number.parseFloat(values.count)
            ? (result.crown * Number.parseFloat(values.count)).toFixed(2)
            : 0}
          м
          <sup>
            <small>3</small>
          </sup>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">
          Кубических метров древесины в общем: ~
          {Number.parseFloat(values.count)
            ? (result.general * Number.parseFloat(values.count)).toFixed(2)
            : 0}
          м
          <sup>
            <small>3</small>
          </sup>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <OrderDialog
          open={orderOpen}
          handleClose={() => setOrderOpen(false)}
          volume={(result.general * Number.parseFloat(values.count)).toFixed(2)}
          cost={
            Number.parseFloat(
              result.general * Number.parseFloat(values.count)
            ).toFixed(2) *
              Math.floor(Math.random() * (100 - 1)) +
            1
          }
          treeType={values.type}
        />
        <Button
          onClick={() => setOrderOpen(true)}
          color="primary"
          disabled={
            !Boolean(
              Number.parseFloat(values.count)
                ? (result.general * Number.parseFloat(values.count)).toFixed(2)
                : 0
            )
          }
        >
          Оформление заказа на древесину
        </Button>
        {user.level === "admin" && (
          <Button onClick={() => setEditMode(true)} color="primary">
            Добавить вид дерева
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Cutdown;
