import clsx from "clsx";
import isSameDay from "date-fns/isSameDay";
import React, { useState } from "react";
import isWithinInterval from "date-fns/isWithinInterval";
import { DatePicker } from "@material-ui/pickers";
import { createStyles } from "@material-ui/styles";
import { IconButton, withStyles } from "@material-ui/core";
import { startOfDay, endOfDay } from "date-fns";
import moment from "moment";

const styles = createStyles((theme) => ({
  dayWrapper: {
    position: "relative",
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: "0 0px",
    color: "inherit",
  },
  customDayHighlight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "2px",
    right: "2px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled,
  },
  highlight: {
    backgroundColor: "black",
    color: theme.palette.common.white,
  },
  firstHighlight: {
    extend: "highlight",
    borderRadius: "50%",
  },
  endHighlight: {
    extend: "highlight",
    borderRadius: "50%",
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    display: "inline-block",
    backgroundColor: "green",
  },
  blueDot: {
    backgroundColor: "blue",
  },
}));

function makeJSDateObject(date) {
  if (date) {
    return date.clone().toDate();
  }

  if (moment.isMoment(date)) {
    return date.clone().toDate();
  }

  if (date) {
    return date.toJSDate();
  }

  if (date) {
    return new Date(date.getTime());
  }

  return date;
}

const CustomCalendar = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date("2020-06-12"));
  const {
    activityDates: { appointmentsDates, tasksDates },
  } = props;

  const onDateChange = (date) => {
    setSelectedDate(selectedDate);
    props.onDateChange(date);
  };

  const renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
    const { classes } = props;
    let dateClone = makeJSDateObject(date);
    let selectedDateClone = makeJSDateObject(selectedDate);

    const start = startOfDay(selectedDateClone);
    const end = endOfDay(selectedDateClone);

    const dayIsBetween = isWithinInterval(dateClone, { start, end });
    const isFirstDay = isSameDay(dateClone, start);
    const isLastDay = isSameDay(dateClone, end);

    const wrapperClassName = clsx({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay,
    });

    const dayClassName = clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
    });

    const greenDot = clsx(classes.dot, classes.greenDot);
    const blueDot = clsx(classes.dot, classes.blueDot);

    const hasEvent = (dates) => {
      return dates.some((d) => {
        const dateFormat = "YYYY-MM-DD";
        return date.format(dateFormat) === moment(d).format(dateFormat);
      });
    };
    const hasAppointment = hasEvent(appointmentsDates);
    const hasTask = hasEvent(tasksDates);

    return (
      <div>
        <div className={wrapperClassName}>
          <IconButton className={dayClassName}>
            <div style={{ textAlign: "center" }}>
              <span> {date.format("DD")} </span>
            </div>
          </IconButton>
        </div>
        {(hasTask || hasAppointment) && (
          <div style={{ textAlign: "center" }}>
            {hasTask && <span className={greenDot} />}
            <span style={{ marginRight: 3 }} />
            {hasAppointment && <span className={blueDot} />}
          </div>
        )}
      </div>
    );
  };

  return (
    <DatePicker
      label="Date picker"
      value={selectedDate}
      fullWidth={true}
      variant="static"
      open={true}
      onChange={onDateChange}
      renderDay={renderWrappedWeekDay}
      textFieldStyle={{ width: "100%" }}
      Props
    />
  );
};

export default withStyles(styles)(CustomCalendar);
