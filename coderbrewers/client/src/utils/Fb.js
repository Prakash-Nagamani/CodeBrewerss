import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";
// import TiSocialFacebookCircular from "react-icons/lib/ti/social-facebook-circular";
import { createAdmin, updateAdminStatus } from "../actions/posts";
import { useDispatch, useSelector } from "react-redux";

const Fb = () => {
  const dispatch = useDispatch();
  const responseFacebook = (response) => {
    console.log(response.name, response.email, response.userID);
    const initial_data = {
      name: response.name,
      email: response.email,
      userId: response.userID,
    };

    dispatch(createAdmin(initial_data));
  };

  return (
    <div>
      <FacebookLogin
        appId="1052323478753785"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    </div>
    // {data?<></>}
  );
};

export default Fb;
