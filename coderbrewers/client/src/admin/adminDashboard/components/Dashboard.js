import React from "react";
import { Sidenav, Nav, Navbar } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useParams, Link } from "react-router-dom";
import DashboardIcon from "@rsuite/icons/Dashboard";
import GearIcon from "@rsuite/icons/Gear";

let id = null;
const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  console.log(id);
  return (
    <Navbar {...props}>
      <Navbar.Brand>FreeAnalyst</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item eventKey="1">Home</Nav.Item>
        <Nav.Item eventKey="2">
          <Link to={`/beforeQuizDisplay`}>All Quiz Details</Link>
        </Nav.Item>
        <Nav.Item eventKey="3">Question Bank</Nav.Item>

        <Nav.Menu title="Settings">
          <Nav.Item eventKey="4">
            <Link to={`/${id}/logout`}>Logout</Link>
          </Nav.Item>
          <Nav.Item eventKey="5">Help</Nav.Item>
          <Nav.Item eventKey="6">Contact Us</Nav.Item>
        </Nav.Menu>
      </Nav>
    </Navbar>
  );
};
const Dashboard = ({ params }) => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");

  id = params.id;
  return (
    <div className="nav-wrapper">
      <NavBarInstance
        appearance="inverse"
        activeKey={activeKey}
        onSelect={setActiveKey}
      />
      <hr />
    </div>
  );
};

export default Dashboard;
