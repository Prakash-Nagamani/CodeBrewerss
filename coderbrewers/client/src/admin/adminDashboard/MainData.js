import React from "react";
import { Container } from "rsuite";
import Content from "rsuite/Content";
import Dashboard from "./components/Dashboard";
import Header from "rsuite/Header";
import Body from "./components/Body";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateAdminStatus } from "../../actions/posts";
import { useDispatch } from "react-redux";

const MainData = ({ data }) => {
  const params = useParams();
  console.log("Awdawdwa", data[0]._id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAdminStatus(data[0]._id, { isLogged: true }));
  }, []);

  return (
    <Container>
      <Header>
        <Dashboard xs={12} sm={4} params={params} admin_data={data} />
      </Header>
      <Container>
        <Content>
          <Body xs={12} sm={4} admin_data={data} />
        </Content>
      </Container>
    </Container>
  );
};

export default MainData;
