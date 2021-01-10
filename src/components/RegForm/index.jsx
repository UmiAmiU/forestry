import React from "react";
import { Field } from "react-final-form";
import { Button, Box } from "@material-ui/core";
import TextField from "../TextField";
import { Typography } from "@material-ui/core";

const required = (value) => (value ? undefined : "Required");

const RegForm = ({
  submitError,
  handleSubmit,
  submitting,
  pristine,
  classes,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Box m={1} display="flex" justifyContent="center">
        <Field
          name="name"
          type="text"
          fullWidth
          label="Логин"
          validate={required}
          component={TextField}
        />
      </Box>
      <Box m={1} display="flex" justifyContent="center">
        <Field
          name="password"
          type="password"
          fullWidth
          label="Пароль"
          validate={required}
          component={TextField}
        />
      </Box>
      <Box m={1} display="flex" justifyContent="center">
        <Field
          name="matchPass"
          type="password"
          fullWidth
          label="Повторите пароль"
          validate={required}
          component={TextField}
        />
      </Box>
      <Box m={1} display="flex">
        {submitError && (
          <Typography variant="body2" color="error" component="p">
            {submitError}
          </Typography>
        )}
      </Box>
      <Box m={1} display="flex" justifyContent="center">
        <Button
          variant="contained"
          type="submit"
          disabled={submitting || pristine}
        >
          Войти
        </Button>
      </Box>
    </form>
  );
};
export default RegForm;
