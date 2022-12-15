import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DisplayQuiz from "./DisplayQuiz";

const BeforeDisplay = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/getQuizzes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  console.log(data);

  return data ? <DisplayQuiz posts={data} /> : <CircularProgress />;
};

export default BeforeDisplay;
