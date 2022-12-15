import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion, updateQuiz } from "../../../../actions/posts";
import FileBase from "react-file-base64";

import {
  TextField,
  Typography,
  Paper,
  Button,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Rough from "./Rough";
import useStyles from "./styles";
const ChildQues = ({ quizData }) => {
  const params = useParams();
  const classes = useStyles();

  const dispatch = useDispatch();

  console.log(params);
  var d = parseInt(params.count);
  console.log(quizData);

  const initial_data = {
    name: "",
    question_Description: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    selectedFile: "",
    solution: "",
    tags: "",
    quiz_id: "",
  };

  const [count, setCount] = useState(() => d);
  const [countpub, setCountPub] = useState(() => 0);
  const [data, setData] = useState(initial_data);
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quizData[0]._id);
    data["quiz_id"] = quizData[0]._id;
    console.log(data);
    setCount((prev) => prev - 1);
    setCountPub((prev) => prev + 1);
    dispatch(createQuestion(data));
    alert("Question added");
    setData(initial_data);
  };
  const decrement = () => {
    if (count < 1) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const card = (
    <Box
      className={classes.paper}
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <CardActions>
        <Button size="small" onClick={decrement}>
          -
        </Button>
      </CardActions>
      <CardContent>
        <Typography variant="h5" component="div">
          Remaining Questions: {count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={increment}>
          +
        </Button>
      </CardActions>
      <CardActions></CardActions>
      <CardContent>
        <Typography variant="h5" component="div">
          Published Question: {countpub}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
      <Button variant="contained" color="success">
        Publish Quiz
      </Button>
    </Box>
  );

  return !quizData ? (
    <CircularProgress />
  ) : (
    <>
      <Box className={classes.paper} xs={12} sm={12}>
        <Card variant="outlined">{card}</Card>
      </Box>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
        >
          <Typography variant="h6">Create a Question</Typography>

          <TextField
            name="creator"
            variant="outlined"
            label="Name of the question"
            fullWidth
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <TextField
            name="creator"
            variant="outlined"
            label="Question Description"
            fullWidth
            required
            value={data.question_Description}
            onChange={(e) =>
              setData({ ...data, question_Description: e.target.value })
            }
          />

          <TextField
            name="tags"
            variant="outlined"
            label="tags/Hints"
            value={data.tags}
            fullWidth
            onChange={(e) => setData({ ...data, tags: e.target.value })}
          />
          <TextField
            name="option-1"
            variant="outlined"
            label="Option-1"
            value={data.option1}
            required
            fullWidth
            onChange={(e) => setData({ ...data, option1: e.target.value })}
          />
          <TextField
            name="option-2"
            variant="outlined"
            label="Option-2"
            value={data.option2}
            fullWidth
            required
            onChange={(e) => setData({ ...data, option2: e.target.value })}
          />
          <TextField
            name="option-3"
            variant="outlined"
            label="Option-3"
            value={data.option3}
            fullWidth
            required
            onChange={(e) => setData({ ...data, option3: e.target.value })}
          />
          <TextField
            name="option-4"
            variant="outlined"
            label="Option-4"
            value={data.option4}
            fullWidth
            required
            onChange={(e) => setData({ ...data, option4: e.target.value })}
          />
          <TextField
            name="Solution"
            variant="outlined"
            label="Solution"
            fullWidth
            required
            value={data.solution}
            onChange={(e) => setData({ ...data, solution: e.target.value })}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setData({ ...data, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            pt={2}
            size="medium"
            type="submit"
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            onClick={(e) => setData(initial_data)}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default ChildQues;
