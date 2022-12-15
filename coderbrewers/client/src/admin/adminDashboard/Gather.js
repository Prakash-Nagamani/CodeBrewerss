import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainData from "./MainData";

const Gather = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/findAdmin/${params.id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return data ? <MainData data={data} /> : <CircularProgress />;
};

export default Gather;
