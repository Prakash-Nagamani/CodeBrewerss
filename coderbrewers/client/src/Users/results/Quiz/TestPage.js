import * as React from "react";
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

export default function ActionAreaCard() {
  //         const countdate = new Date("July 16, 2022 20:00:00").getTime();
  // const currdate = new Date().getTime();
  // const countdown = ()=>{

  //     const gap = countdate - currdate;

  //     const second = 1000
  //     const minutes = second * 60;
  //     const hour = minutes * 60

  //     const texthour = Math.floor(gap / hour);
  //     const textminutes = Math.floor((gap % hour)/minutes)
  //     const textseconds = Math.floor((gap % minutes)/second)

  //     document.querySelector(".Hour").innerText = texthour
  //     document.querySelector(".Minute").innerText = textminutes
  //     document.querySelector(".Second").innerText = textseconds
  // }
  // React.useEffect(() => {const interval = setInterval(countdown,1000);})
  document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  document.body.style.background = "url(./image.js)";
  const [answer, setAnswer] = React.useState(null);
  const handlesubmit = (e) => {
    console.log(answer);
  };
  return (
    <>
      {/* <Card>
            <CardActionArea>
                <CardContent style={{diplay:"flex"}}>
                    <div className='Count-hour'>
                        <h5 className='Hour'>Time</h5>
                        <h5 >Hour</h5>
                    </div>
                    <div className='Count-minute'>
                        <h5 className='Minute'>Time</h5>
                        <h5 >Hour</h5>
                    </div>
                    <div className='Count-second'>
                        <h5 className='Second'>Time</h5>
                        <h5 >Hour</h5>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card> */}
      <Card
        sx={{ maxWidth: "90 ", justifySelf: "center", alignSelf: "center" }}
      >
        <CardActionArea style={{ justifySelf: "center", alignSelf: "center" }}>
          <CardMedia
            component="img"
            height="360"
            image={require("./image.jpg")}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Solve the Above question
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Question Description
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
                  value="option1"
                  control={<Radio />}
                  label={"option1"}
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label={"option2"}
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label={"option3"}
                />
                <FormControlLabel
                  value="option4"
                  control={<Radio />}
                  label={"option4"}
                />
              </RadioGroup>
              <Button onClick={handlesubmit} variant="contained">
                Submit
              </Button>
            </FormControl>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
