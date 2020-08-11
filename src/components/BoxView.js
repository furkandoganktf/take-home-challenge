import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Divider, makeStyles, CardActions, Button } from "@material-ui/core";
import { AppointmentItem, RecommendItem, TodoItem } from "./items";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    marginTop: 2,
  },
  avatar: {
    backgroundColor: "red",
  },
  button: {
    margin: theme.spacing(1),
    justifyContent: "left",
    backgroundColor: "rgb(237,249,243)",
    color: "rgb(0,190,116)",
  },
  title: theme.title,
}));

const names = {
  todo: {
    title: "To-Dos",
    subheader: "",
    buttonText: "",
    hasButton: false,
    component: TodoItem,
  },
  recommendation: {
    title: "Recommended",
    subheader: "Upcoming To-Dos based on your profile and treatment timeline",
    buttonText: "View All Recommendations",
    hasButton: true,
    component: RecommendItem,
  },
  appointment: {
    title: "Appointments",
    subheader: "",
    buttonText: " What You Need to Know",
    hasButton: true,
    component: AppointmentItem,
  },
};

const BoxView = ({ name, items = [] }) => {
  const classes = useStyles();
  const itemsLength = items.length;
  const boxValues = names[name];
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title={<div className={classes.title}>{boxValues.title}</div>} subheader={boxValues.subheader} />
        <Divider />
        <CardContent>
          {items.map((fieldValues, index) => (
            <boxValues.component key={index} hasDivider={index !== itemsLength - 1} fieldValues={fieldValues} />
          ))}
        </CardContent>
        {boxValues.hasButton && (
          <CardActions disableSpacing>
            <Button fullWidth variant="outlined" color="primary" className={classes.button} endIcon={<ArrowForwardIcon />}>
              {boxValues.buttonText}
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default BoxView;
