import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Divider, makeStyles, CardActions, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AppointmentItem from "./AppointmentItem";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    marginTop: 10,
  },
  avatar: {
    backgroundColor: "red",
  },
  button: {
    justifyContent: "left",
    backgroundColor: "rgb(238,247,255)",
  },
  title: theme.title,
}));

const AppointmentList = ({ items = [] }) => {
  const classes = useStyles();
  const itemsLength = items.length;

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={
            <div className={classes.title}>
              <span style={{ color: "blue" }}>Appointments</span>
            </div>
          }
        />
        <Divider />
        <CardContent>
          {items.map((appointment, index) => (
            <div key={index}>
              <AppointmentItem appointment={appointment} />
              {itemsLength - 1 !== index && <Divider style={{ backgroundColor: "black", height: 2, marginTop: 20, marginBottom: 20 }} />}
            </div>
          ))}
        </CardContent>

        <CardActions disableSpacing>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.button}
            endIcon={<ArrowForwardIcon />}
            style={{ textAlign: "left" }}
          >
            What You Need to Know
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default AppointmentList;
