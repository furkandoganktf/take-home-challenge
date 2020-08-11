import Container from "@material-ui/core/Container";
import React from "react";
import CalendarApp from "./views/Calendar";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        display: "none",
      },
    },
    MuiPickersBasePicker: {
      pickerView: {
        maxWidth: "500px",
        minHeight: "320px",
      },
    },
  },
});

export default function Page() {
  return (
    <ThemeProvider theme={materialTheme}>
      <Container maxWidth="xs">
        <CalendarApp />
      </Container>
    </ThemeProvider>
  );
}
