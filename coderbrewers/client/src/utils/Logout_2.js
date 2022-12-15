import React from "react";
import { updateAdminStatus } from "../actions/posts";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
const Logout_2 = ({ data }) => {
  const dispatch = useDispatch();
  console.log("l2", data);
  const handlelike = () => {
    dispatch(updateAdminStatus(data[0]._id, { isLogged: false }));
    window.location.replace("http://localhost:3000/#/");
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handlelike}>
        Confirm??
      </Button>
    </div>
  );
};

export default Logout_2;
