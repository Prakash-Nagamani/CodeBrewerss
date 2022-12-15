import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  CardMedia,
  Card,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./Quiz_styles";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { updateQuiz } from "../../../../../actions/posts";
import { useDispatch, useSelector } from "react-redux";
const QuizEdit = ({ data }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [postData, setpostData] = useState(data);
  console.log(postData);

  const handleUpdate = (e) => {
    if (
      window.confirm(
        "Do you really want to edit the changes from database?? Please Click 'OK' to continue!!"
      )
    ) {
      dispatch(updateQuiz(data._id, postData));
    }
  };
  const clear = () => {
    setpostData(data);
  };

  return !data ? (
    <CircularProgress />
  ) : (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h5">QuizId: {postData._id}</Typography>
        <Typography variant="h6">
          &nbsp; createdAt: {postData.createdAt.slice(0, 10)}
        </Typography>
        <Typography variant="h5">
          SharableLink:{" "}
          {`http://localhost:3000/#/attemptQuiz/${postData._id}/:<username>`}
        </Typography>
        <br />

        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.author_id}
          required
          onChange={(e) =>
            setpostData({ ...postData, author_id: e.target.value })
          }
        />

        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          required
          value={postData.name}
          onChange={(e) => setpostData({ ...postData, name: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="duration"
          fullWidth
          required
          value={postData.duration}
          onChange={(e) =>
            setpostData({ ...postData, duration: e.target.value })
          }
        />

        <TextField
          name="message"
          variant="outlined"
          label="Edit Notes"
          fullWidth
          multiline
          rows={10}
          value={postData.notes}
          onChange={(e) => setpostData({ ...postData, notes: e.target.value })}
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          pt={2}
          size="medium"
          type="submit"
          fullWidth
          onClick={handleUpdate}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          fullWidth
          onClick={clear}
        >
          Reset
        </Button>
      </form>
    </Paper>
  );
};

export default QuizEdit;
