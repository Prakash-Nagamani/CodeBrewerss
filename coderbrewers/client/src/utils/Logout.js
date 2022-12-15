import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, CircularProgress } from "@material-ui/core";
import Logout_2 from "./Logout_2";
const Logout = () => {
  const params = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/findAdmin/${params.id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);
  console.log("Logout", posts);
  return posts ? <Logout_2 data={posts} /> : <CircularProgress />;
};

export default Logout;
