import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HistoryContents from "./HistoryContents";

const History = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/getQuizzes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);
  console.log(posts);
  return posts ? <HistoryContents data={posts} /> : <CircularProgress />;
};

export default History;
