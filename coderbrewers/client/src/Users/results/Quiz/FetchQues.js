import React, {
  useEffect,
  useRef,
  createContext,
  useState,
  useContext,
} from "react";
import { setDate } from "rsuite/esm/utils/dateUtils";
import axios from "axios";
import Store from "./Store";
import { CircularProgress } from "@material-ui/core";
const UserContext = createContext();
const FetchQues = ({ ques, full_data }) => {
  console.log(ques);
  const [posts, setPosts] = useState(null);
  const refernce = useRef(new Array());

  const handlequeries = async (id) => {
    await fetch(`http://localhost:4000/getSingleQuestion/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {}, 2000);
        setPosts(json);
        console.log(json);
      });
  };
  if (posts) {
    refernce.current.push(posts);
  }

  useEffect(() => {
    for (var i = 0; i < ques.length; i++) {
      handlequeries(ques[i]);

      console.log(ques[i]);
      console.log(posts);
    }
  }, []);
  console.log("adwadwa", refernce.current);
  var countDownDate = new Date().getTime() + full_data.duration * 60000;
  return refernce.current ? (
    <Store
      data={refernce.current}
      ques={ques}
      full_data={full_data}
      countDownDate={countDownDate}
    />
  ) : (
    <CircularProgress />
  );
};

export default FetchQues;
