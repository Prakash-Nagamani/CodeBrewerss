import { CircularProgress } from "@material-ui/core";
import * as React from "react";
import { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, requirePropFactory } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logic from "./Timer/Logic";

const Store = ({ data, ques, full_data, countDownDate }) => {
  console.log("awddawadawdawdw", data);
  const x = new Date().getDate;
  console.log(x);
  document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  const [answer, setAnswer] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);
  const number_questions = useRef(0);
  console.log("anurav", ques);

  const handlesubmit = (e) => {
    console.log(answer);

    if (number_questions.current < data.length) {
      number_questions.current += 1;
    } else {
    }
    console.log(number_questions.current);
    if (number_questions.current < data.length) {
      window.location.reload();
    }
  };

  const handlePrev = (e) => {
    console.log(answer);

    if (number_questions.current > 0) {
      number_questions.current -= 1;
    } else {
      number_questions.current = 0;
    }
    if (
      number_questions.current < data.length &&
      number_questions.current > 0
    ) {
      window.location.reload();
    }
    console.log(number_questions.current);
  };

  return data.length == 0 ? (
    <CircularProgress />
  ) : (
    <>
      <Logic data={data} full_data={full_data} countDownDate={countDownDate} />
      <Card
        sx={{ maxWidth: "90 ", justifySelf: "center", alignSelf: "center" }}
      >
        <CardActionArea style={{ justifySelf: "center", alignSelf: "center" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Solve the Above question
            </Typography>
            <Typography gutterBottom variant="h6">
              {data[number_questions.current].question_Description}
            </Typography>

            <FormControl>
              <RadioGroup
                style={{
                  display: "flex",
                  justifySelf: "center",
                  alignSelf: "center",
                }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="option1"
                name="radio-buttons-group"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              >
                <FormControlLabel
                  value={data[number_questions.current].option1}
                  control={<Radio />}
                  label={data[number_questions.current].option1}
                />
                <FormControlLabel
                  value={data[number_questions.current].option2}
                  control={<Radio />}
                  label={data[number_questions.current].option2}
                />
                <FormControlLabel
                  value={data[number_questions.current].option3}
                  control={<Radio />}
                  label={data[number_questions.current].option3}
                />
                <FormControlLabel
                  value={data[number_questions.current].option4}
                  control={<Radio />}
                  label={data[number_questions.current].option4}
                />
              </RadioGroup>
              <Button onClick={handlesubmit} variant="contained">
                Submit
              </Button>
              {/* <Button
                onClick={(e) => {
                  Window.location.replace("http://localhost:3000/#/");
                }}
                variant="contained"
              >
                Prev
              </Button> */}
            </FormControl>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Store;
