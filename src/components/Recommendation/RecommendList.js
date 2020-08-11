import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Divider, makeStyles, CardActions, Button } from "@material-ui/core";
import RecommendItem from "./RecommendItem";

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
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
}));

const RecommendList = ({ items = [] }) => {
  const classes = useStyles();
  const itemsLength = items.length;

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={<div className={classes.title}>Recommended</div>}
          subheader="Upcoming To-Dos based on your profile and treatment timeline"
        />
        <Divider />
        <CardContent>
          {items.map((recommendation, index) => (
            <RecommendItem key={index} hasDivider={index !== itemsLength - 1} recommendation={recommendation} />
          ))}
        </CardContent>

        <CardActions disableSpacing>
          <Button fullWidth variant="outlined" color="primary" className={classes.button} endIcon={<ArrowForwardIcon />}>
            View All Recommendations
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default RecommendList;
