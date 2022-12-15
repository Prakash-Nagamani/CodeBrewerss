import React, { useState, useEffect } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Paper,
  Container,
  Typography,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";
import { DatePicker, Row, Col } from "rsuite";

const Studentsign = () => {
  const [val, setVal] = useState(null);
  const [adminval, setAdminval] = useState(null);
  const [number, setNumber] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const data = {
    name: "",
    start_date: new Date(),
  };

  const classes = useStyles();
  const initial_data = {
    name: "",
    url: "",
    dob: new Date(),
  };
  const [info, setData] = useState(initial_data);

  const handlesubmit = (e) => {
    if (window.confirm("Do you want to start exam? ")) {
      window.location.replace(info.url);
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
          >
            <Typography variant="h6">Student Info</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={info.name}
              label="User Name"
              onChange={(e) => setData({ ...info, name: e.target.value })}
            />
            <TextField
              fullWidth
              variant="outlined"
              value={info.url}
              label="URL"
              onChange={(e) => setData({ ...info, url: e.target.value })}
            />

            <br />

            <div className={classes.paper}>
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                pt={2}
                size="medium"
                type="submit"
                onClick={handlesubmit}
              >
                Submit
              </Button>
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="secondary"
                size="medium"
                onClick={(e) => setVal(0)}
              >
                Clear
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Studentsign;
