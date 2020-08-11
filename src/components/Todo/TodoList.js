import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Divider, makeStyles } from "@material-ui/core";
import TodoItem from "./TodoItem";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    marginTop: 10,
  },
  avatar: {
    backgroundColor: "red",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    fontWeight: "bold",
  },
}));

const TodoList = ({ items = [] }) => {
  const classes = useStyles();
  const itemsLength = items.length;
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={
            <div className={classes.title}>
              <span style={{ color: "green" }}>To-Dos</span>
            </div>
          }
        />
        <Divider />
        <CardContent>
          {items.map((todo, index) => (
            <TodoItem key={index} hasDivider={index !== itemsLength - 1} todo={todo} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoList;
