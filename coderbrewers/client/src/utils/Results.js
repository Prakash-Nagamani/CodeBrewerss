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

const Results = () => {
  const [val, setVal] = useState(null);
  const [adminval, setAdminval] = useState(null);
  const [number, setNumber] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const data = {
    name: "",
    start_date: new Date(),
  };

  const classes = useStyles();

  const handlesubmit = () => {
    console.log("Name: ", val);
    console.log("Admin Name: ", adminval);
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
            <Typography variant="h6">Results</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={val}
              label="User Name"
              onChange={(e) => setVal(e.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              value={adminval}
              label="Admin Name"
              onChange={(e) => setAdminval(e.target.value)}
            />

            <div className={classes.paper}>
              <Row>
                <Col>Date of Birth</Col>
                <Col>
                  <DatePicker
                    variant="outlined"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                  />
                </Col>
              </Row>
            </div>
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
          {/* {number ? (
        <Redirect to="create/quiz"></Redirect>
      ) : (
        <CircularProgress />
      )} */}
        </Paper>
      </Container>
    </>
  );
};

export default Results;
