import React, { useState } from "react";
import { Form } from "rsuite";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import { FlexboxGrid } from "rsuite";
import { Panel } from "rsuite";
import { Navbar } from "rsuite";
import { Link } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
const Login = () => {
  const initial_data = {
    username: "",
    email: "",
    password: "",
    repassword: "",
  };
  const [data, setData] = useState(initial_data);
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="show-fake-browser login-page">
        <Container>
          <Header>
            <br />
            <br />
            <br />
            <br />
          </Header>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Login</h3>} bordered>
                  <Form fluid>
                    <Button color="blue" appearance="ghost">
                      <Link to={"/Fb"}>
                        Sign in with <FaFacebook />
                      </Link>
                    </Button>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    </>
  );
};

export default Login;
