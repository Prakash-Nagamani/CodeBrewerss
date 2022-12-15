import React, { useState } from "react";
import { Form } from "rsuite";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import { FlexboxGrid } from "rsuite";
import { Panel } from "rsuite";
import { Navbar } from "rsuite";
import { DatePicker, Row, Col } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const AttemptExam = () => {
  const initial_data = {
    name: "",
    url: "",
    dob: new Date(),
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
            <br />
          </Header>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Enter Details</h3>} bordered>
                  <Form fluid>
                    <Form.Group
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                      controlId="name-1"
                    >
                      <Form.ControlLabel>Name</Form.ControlLabel>
                      <Form.Control name="name" />
                    </Form.Group>
                    <Form.Group
                      value={data.url}
                      onChange={(e) =>
                        setData({ ...data, url: e.target.value })
                      }
                      controlId="email-1"
                    >
                      <Form.ControlLabel>URL</Form.ControlLabel>
                      <Form.Control name="url" type="url" />
                    </Form.Group>
                    <Form.Group controlId="dob">
                      <Form.ControlLabel>Date of Birth</Form.ControlLabel>
                      <DatePicker
                        variant="outlined"
                        selected={data.dob}
                        value={data.username}
                        onChange={(e) => setData({ ...data, dob: e })}
                      />
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button appearance="primary" onClick={handlesubmit}>
                          GO
                        </Button>
                      </ButtonToolbar>
                    </Form.Group>
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

export default AttemptExam;
