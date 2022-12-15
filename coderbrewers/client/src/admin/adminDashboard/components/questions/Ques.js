import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChildQues from "./ChildQues";
const Ques = () => {
  const [quizData, setQuizData] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/findQuiz/${params.name}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setQuizData(json);
      });
  }, []);
  console.log("Quiz", quizData);
  return !quizData ? <CircularProgress /> : <ChildQues quizData={quizData} />;
};

export default Ques;
