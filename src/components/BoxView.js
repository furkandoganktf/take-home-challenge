import React from "react";
import clsx from "clsx";
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
    border: "none",
  },
  appointmentButton: {
    backgroundColor: "rgb(239,247,255)",
    color: "rgb(44,151,251)",
  },
  recommendButton: {
    backgroundColor: "rgb(237,249,243)",
    color: "rgb(0,190,116)",
  },
  title: theme.title,
}));

const names = {
  todo: {
    title: "To-Dos",
    subheader: "",
    hasButton: false,
    buttonText: "",
    titleColor: "rgb(55,177,89)",
    component: TodoItem,
  },
  recommendation: {
    title: "Recommended",
    subheader: "Upcoming To-Dos based on your profile and treatment timeline",
    hasButton: true,
    buttonText: "View All Recommendations",
    buttonClass: "recommendButton",
    titleColor: "rgb(0,0,0)",
    component: RecommendItem,
  },
  appointment: {
    title: "Appointments",
    subheader: "",
    hasButton: true,
    buttonText: " What You Need to Know",
    buttonClass: "appointmentButton",
    titleColor: "rgb(44,151,251)",
    component: AppointmentItem,
  },
};

const BoxView = ({ name, items = [] }) => {
  const classes = useStyles();
  const itemsLength = items.length;
  const listValues = names[name];
  const buttonStyle = listValues.hasButton ? clsx(classes.button, classes[listValues.buttonClass]) : classes.button;
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={<div className={classes.title}>{listValues.title}</div>}
          subheader={listValues.subheader}
          style={{ color: listValues.titleColor }}
        />
        <Divider />
        <CardContent>
          {items.map((fieldValues, index) => (
            <listValues.component key={index} hasDivider={index !== itemsLength - 1} fieldValues={fieldValues} />
          ))}
        </CardContent>
        {listValues.hasButton && (
          <CardActions disableSpacing>
            <Button fullWidth variant="outlined" color="primary" className={buttonStyle} endIcon={<ArrowForwardIcon />}>
              {listValues.buttonText}
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default BoxView;
