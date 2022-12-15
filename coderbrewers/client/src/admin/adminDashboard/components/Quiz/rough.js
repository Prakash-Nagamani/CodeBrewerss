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
import moment from "moment";
import { Switch, Route, Redirect } from "react-router-dom";

const Quiz = () => {
  const [val, setVal] = useState(0);
  const [number, setNumber] = useState(null);

  const classes = useStyles();

  const handlesubmit = () => {
    if (val > 20) {
      alert("Dont Enter more than 20");
    } else {
      setNumber(val);
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
            <Typography variant="h6">Quiz</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={val}
              label="Enter Number of questions"
              onChange={(e) => setVal(e.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
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
          </form>
          {number ? (
            <Redirect to="create/quiz"></Redirect>
          ) : (
            <CircularProgress />
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Quiz;
