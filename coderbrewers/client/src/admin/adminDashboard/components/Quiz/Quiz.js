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
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { DatePicker, Row, Col } from "rsuite";
import { createQuiz } from "../../../../actions/posts";

import Temp from "./Temp";

const Quiz = () => {
  const params = useParams();
  const initial_data = {
    name: "",
    author_id: params.id,

    start_date: new Date(),
    end_date: new Date(),
    duration: 1,
    questions_count: 0,
  };
  const [data, setData] = useState(initial_data);
  const [finalData, setFinalData] = useState(null);
  console.log(data);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handlesubmit = async (e) => {
    const y = dispatch(createQuiz(data));
    console.log(y);
    setFinalData(data);
  };

  return (
    <>
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
            <Typography variant="h6">Enter Quiz Details</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={data.questions_count}
              required
              label="Enter Number of questions"
              onChange={(e) =>
                setData({ ...data, questions_count: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Enter a name of quiz"
              required
              variant="outlined"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <TextField
              fullWidth
              variant="outlined"
              required
              label="Enter duration of your quiz (in mins)"
              value={data.duration}
              onChange={(e) => setData({ ...data, duration: e.target.value })}
            />

            <div className={classes.paper}>
              <Row>
                <Col>Start Date</Col>
                <Col>
                  <DatePicker
                    variant="outlined"
                    selected={data.start_date}
                    onChange={(date) => setData({ ...data, start_date: date })}
                  />
                </Col>
              </Row>
            </div>
            <div className={classes.paper}>
              <Row>
                <Col>End Date</Col>
                <Col>
                  <DatePicker
                    variant="outlined"
                    selected={data.end_date}
                    onChange={(date) =>
                      date > data.start_date
                        ? setData({ ...data, end_date: date })
                        : setData({ ...data, end_date: data.start_date })
                    }
                  />
                </Col>
              </Row>
            </div>

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
              onClick={(e) => setData(initial_data)}
            >
              Clear
            </Button>
          </form>
          {/* {finalData ? <Redirect to="create/quiz"></Redirect> : <></>} */}
          {finalData ? (
            <Redirect
              to={`/${params.id}/quiz/${finalData.questions_count}/${finalData.name}`}
            ></Redirect>
          ) : (
            <></>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Quiz;
