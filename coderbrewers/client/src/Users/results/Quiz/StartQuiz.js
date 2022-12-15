import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchQues from "./FetchQues";
const StartQuiz = () => {
  const params = useParams();
  console.log(params);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/getSingleQuiz/${params.id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  console.log(data);
  return !data ? (
    <CircularProgress />
  ) : (
    <FetchQues ques={data.questions} full_data={data}></FetchQues>
  );
};

export default StartQuiz;
