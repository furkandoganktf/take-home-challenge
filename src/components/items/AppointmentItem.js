import React from "react";
import { makeStyles, Grid, Typography, Divider } from "@material-ui/core";
import { Schedule, RoomOutlined, Today, Event } from "@material-ui/icons";
import moment from "moment";

const useStyles = makeStyles(() => ({
  typography: {
    fontWeight: "bold",
    display: "flex",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
}));
const AppointmentItem = ({ fieldValues, hasDivider = false }) => {
  const classes = useStyles();
  const {
    node: {
      title,
      startingDate,
      location: { title: locationTitle },
    },
  } = fieldValues;

  const [date, time, am] = moment(startingDate).format("dddd, MMMM DD, YYYY_h:mm_a").split("_");
  const icons = [
    { icon: <Event />, name: date },
    { icon: <Schedule />, name: time + am },
    { icon: <RoomOutlined />, name: locationTitle },
  ];

  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>{<Today />}</Grid>
        <Grid item xs zeroMinWidth>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs={10}>
              <Typography className={classes.typography}>{title}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: 10, marginBottom: 20 }} />
      {icons.map(({ icon, name }, index) => (
        <Grid key={index} container wrap="nowrap" spacing={2}>
          <Grid item>{icon}</Grid>
          <Grid item xs zeroMinWidth>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={10}>
                {name}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
      {hasDivider && <Divider style={{ backgroundColor: "black", height: 2, marginTop: 20, marginBottom: 20 }} />}
    </>
  );
};

export { AppointmentItem };
