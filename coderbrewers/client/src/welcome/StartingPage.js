import {
  Container,
  Header,
  Content,
  Footer,
  Sidebar,
  IconButton,
} from "rsuite";

import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import Button from "rsuite/Button";
import { Link } from "react-router-dom";
import ButtonToolbar from "rsuite/ButtonToolbar";
import { FlexboxGrid } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Panel, PanelGroup, Col, Row } from "rsuite";

const StartingPage = () => {
  return (
    <div style={{ background: "#f5f5f5", height: "100%" }}>
      <div className="show-grid">
        <Container>
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <Content>
            <FlexboxGrid align="middle" mt={4} justify="space-around">
              <FlexboxGrid.Item colspan={4}>
                <Panel
                  shaded
                  bordered
                  style={{
                    display: "inline-block",
                    width: 240,
                    background: "#F5F5DC",
                  }}
                >
                  <Panel header="Participants/Users">
                    <Button
                      color="orange"
                      appearance="primary"
                      style={{ background: "#FFA07A" }}
                    >
                      <Link to="/attempt">Attempt</Link>
                    </Button>
                  </Panel>
                </Panel>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>
                <Panel
                  shaded
                  bordered
                  style={{
                    display: "inline-block",
                    width: 240,
                    background: "#E0FFFF",
                  }}
                >
                  <Panel header="Admin">
                    <ButtonToolbar>
                      <Button
                        color="orange"
                        appearance="outline"
                        style={{ background: "#FFA07A" }}
                      >
                        <Link to={`admin/login`}>
                          Sign in with <FaFacebook />
                        </Link>
                      </Button>
                    </ButtonToolbar>
                    <h3></h3>
                  </Panel>
                </Panel>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>
                <Panel
                  shaded
                  bordered
                  style={{
                    display: "inline-block",
                    width: 240,
                    background: "#FFF0F5",
                  }}
                >
                  <Panel header="RESULTS">
                    <Button
                      color="orange"
                      appearance="outline"
                      style={{ background: "#FFA07A" }}
                    >
                      <Link to={`/results`}>Check Results</Link>
                    </Button>
                  </Panel>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    </div>
  );
};

export default StartingPage;
