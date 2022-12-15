import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion, updateQuiz } from "../actions/posts";
import FileBase from "react-file-base64";
import useStyles from "./createStyles";
import {
  TextField,
  Typography,
  Paper,
  Button,
  Grid,
  CircularProgress,
} from "@material-ui/core";

const Create = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initial_data = {
    name: "",
    question_Description: "",
    tags: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    solution: "",
    selectedFile: "",
    quiz_id: "",
  };
  const [data, setData] = useState(initial_data);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createQuestion(data));
    alert("Question added");
    setData(initial_data);
  };
  console.log(data);
  return (
    <div>
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

          <TextField
            name="Solution"
            variant="outlined"
            label="Quiz_id"
            fullWidth
            required
            value={data.quiz_id}
            onChange={(e) => setData({ ...data, quiz_id: e.target.value })}
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
    </div>
  );
};

export default Create;
