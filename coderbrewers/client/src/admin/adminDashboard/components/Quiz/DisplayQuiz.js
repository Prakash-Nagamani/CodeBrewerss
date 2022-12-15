import React from "react";
import Quizcard from "./Quizcard";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./quizstyles";
import { Container, Content, Header } from "rsuite";
import Dashboard from "../Dashboard";
const DisplayQuiz = ({ posts }) => {
  const classes = useStyles;
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Container>
      <Header>
        <br />
        <br />
        <br />
        <br />
      </Header>
      <Content>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={6} sm={4}>
              <Quizcard post={post} _id={post._id} />
            </Grid>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default DisplayQuiz;
