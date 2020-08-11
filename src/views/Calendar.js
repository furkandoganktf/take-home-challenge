import "date-fns";
import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { usePlanner } from "../usePlanner";
import BoxView from "../components/BoxView";
import CustomCalendar from "../components/CustomCalendar";

const CalendarApp = () => {
  const { data } = usePlanner();

  let [isFirstFetch, setIsFirstFetch] = useState(true);
  let [taskItems, setTaskItems] = useState([]);
  let [appointmentsItems, setAppointmentsItems] = useState([]);

  const {
    journey: {
      tasks: { edges: tasks = [] } = {},
      appointments: { edges: appointments = [] } = {},
      recommendedTaskDefinitions: { edges: recommendedTaskDefinitions = [] } = {},
    } = {},
  } = data || {};

  if (isFirstFetch) {
    taskItems = tasks;
    appointmentsItems = appointments;
  }

  const getDates = (items) => {
    return items.map(({ node: { startingDate } = {} } = {}) => startingDate);
  };

  const onDateChange = (date) => {
    const dateFormat = "YYYY-MM-DD";
    const formattedDate = date.format(dateFormat);
    setTaskItems(tasks.filter((edge) => formattedDate === moment(edge.node.startingDate).format(dateFormat)));
    setAppointmentsItems(appointments.filter((edge) => formattedDate === moment(edge.node.startingDate).format(dateFormat)));
    setIsFirstFetch(false);
  };

  const appointmentsDates = getDates(appointments);
  const tasksDates = getDates(tasks);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <CustomCalendar activityDates={{ appointmentsDates, tasksDates }} onDateChange={onDateChange} />
      <BoxView name="todo" items={taskItems} />
      <BoxView name="recommendation" items={recommendedTaskDefinitions} />
      <BoxView name="appointment" items={appointmentsItems} />
    </MuiPickersUtilsProvider>
  );
};

export default CalendarApp;
