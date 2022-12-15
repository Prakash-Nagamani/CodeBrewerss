import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { TextField, Paper, Button, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

const Quizcard = ({ post, _id }) => {
  console.log(post, _id);
  return (
    <Card
      sx={{
        maxWidth: "400px",
        height: "300px",
        textAlign: "center",
        backgroundColor: "#FFF8E1",
        borderRadius: "20px",
        alignItems: "center",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Quiz Name: {post.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Quiz Id: {_id}
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
            <Typography>
              Start Date:
              <br /> {post.start_date}
            </Typography>
            <Typography>
              End Date: <br /> {post.end_date}
            </Typography>
            <br />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Button variant="contained" size="small" color="secondary">
              <Link to={`/${_id}/editQuiz`}>Edit</Link>
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Quizcard;
