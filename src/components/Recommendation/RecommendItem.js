import React from "react";
import { Divider, makeStyles, Grid, Typography, IconButton } from "@material-ui/core";
import { Clear, AddCircleOutlineOutlined } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  typography: {
    fontWeight: "bold",
    display: "flex",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
}));

const RecommendItem = (fieldValues, hasDivider = false) => {
  const classes = useStyles();
  const {
    fieldValues: {
      node: { title },
    },
  } = fieldValues;
  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <IconButton>
            <AddCircleOutlineOutlined style={{ color: "green" }} />
          </IconButton>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs={10}>
              <Typography className={classes.typography}>{title}</Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton>
                <Clear />
              </IconButton>
            </Grid>
          </Grid>
          {hasDivider && <Divider />}
        </Grid>
      </Grid>
    </>
  );
};

export default RecommendItem;
