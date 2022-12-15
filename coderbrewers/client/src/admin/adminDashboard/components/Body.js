import React from "react";
import FlexboxGrid from "rsuite/FlexboxGrid";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import { Panel, PanelGroup } from "rsuite";
import GearIcon from "@rsuite/icons/Gear";
import Divider from "rsuite/Divider";
import { Link, useParams } from "react-router-dom";

const Body = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="show-grid">
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item colspan={4}>
          <Panel header="Create Quiz" bordered>
            <IconButton placement="center">
              <Link to={`/${params.id}/adminDashBoard/createquiz`}>Create</Link>
            </IconButton>
          </Panel>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item colspan={4}>
          <Panel header="Add Questions" bordered>
            <GearIcon spin style={{ fontSize: "2em" }} />

            <IconButton placement="center">
              <Link to={`/${params.id}/adminDashBoard/editquiz`}>
                Edit Quiz
              </Link>
            </IconButton>
          </Panel>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item colspan={4}>
          <Panel header=" Delete Quiz" bordered>
            <IconButton placement="center">Delete</IconButton>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default Body;
