import React from "react";
import { Grid, TextField, InputAdornment, Typography } from "@material-ui/core";

const Plant = () => {
  const [values, setValues] = React.useState({
    inRow: "",
    btwRow: "",
    length: "",
    width: "",
  });
  const [result, setResult] = React.useState(0);
  const handleChange = (prop) => (event) => {
    const newState = { ...values, [prop]: event.target.value };
    setValues(newState);
    if (
      newState.inRow &&
      newState.btwRow &&
      newState.length &&
      newState.width
    ) {
      setResult(
        (Number.parseFloat(newState.length) *
          Number.parseFloat(newState.width)) /
          (Number.parseFloat(newState.inRow) *
            Number.parseFloat(newState.btwRow))
      );
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Введите данные для расчета</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="inRow"
          label="Расстояние в ряду"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Метров</InputAdornment>
            ),
          }}
          onChange={handleChange("inRow")}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="btwRow"
          label="Расстояние между рядами"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Метров</InputAdornment>
            ),
          }}
          onChange={handleChange("btwRow")}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="length"
          label="Длина посадочной площади"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Метров</InputAdornment>
            ),
          }}
          onChange={handleChange("length")}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="width"
          label="Ширина посадочной площади"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Метров</InputAdornment>
            ),
          }}
          onChange={handleChange("width")}
          fullWidth
        />
      </Grid>
      <Grid item xs>
        <Typography variant="h6">
          Количество деревьев на расчетную площадь: ~{result.toFixed(2)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Plant;
