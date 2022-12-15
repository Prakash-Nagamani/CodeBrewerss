import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuizEdit from "./QuizEdit";
const PreEditForm = () => {
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
  return data ? <QuizEdit data={data} /> : <CircularProgress />;
};

export default PreEditForm;
