import React from "react";
import { Divider, Checkbox, Grid, Typography } from "@material-ui/core";

const TodoItem = (todo, hasDivider = false) => {
  const {
    todo: {
      node: { title },
    },
  } = todo;
  return (
    <>
      <Grid container wrap="nowrap" spacing={1}>
        <Grid item>
          <Checkbox style={{ marginTop: -9 }} name="checkedG" />
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography style={{ fontWeight: "bold" }}>{title}</Typography>
          {hasDivider && <Divider />}
        </Grid>
      </Grid>
    </>
  );
};

export default TodoItem;
