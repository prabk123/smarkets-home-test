import React from "react";
import { Typography, Row, Col, Badge, Divider } from "antd";
import { CalendarFilled } from "@ant-design/icons";
import Moment from "react-moment";
import ContractItem from "./ContractItem";
import "./Tile.css";
import LeageBreadcrumb from "../../shared/LeagueBreadcrumb";
import PropTypes from "prop-types";
const { Paragraph } = Typography;

const Tile = props => {
  const styles = { fontSize: 9 };
  const divderStyles = { margin: "0px", marginTop: "7px" };
  const { league, HOME, AWAY, DRAW, start, state } = props.event;
  let date = null;
  let diff =
    (new Date(start).getTime() - new Date().getTime()) / 1000 / 60 / 60;
  if (state === "upcoming") {
    date = start;
  }
  return (
    <div className="tile tile-background">
      <LeageBreadcrumb league={league} style={styles} />
      <div className="tile-teams">
        <Paragraph className="tile-team">{HOME.name}</Paragraph>
        <Paragraph className="tile-team">{AWAY.name}</Paragraph>
      </div>
      <Row>
        <Col span={8} className="tile-content">
          <ContractItem item={HOME} />
        </Col>
        <Col span={8} className="tile-content">
          <ContractItem item={DRAW} />
        </Col>
        <Col span={8} className="tile-content">
          <ContractItem item={AWAY} />
        </Col>
      </Row>
      <Divider style={divderStyles} />
      <div>
        {date ? (
          <span>
            {diff < 24 ? (
              <span>
                <CalendarFilled className="tile-calender" />
                <Moment className="tile-date" fromNow>
                  {date}
                </Moment>
              </span>
            ) : (
              <span>
                <CalendarFilled className="tile-calender" />
                <Moment className="tile-date" format="dddd">
                  {date}
                </Moment>
              </span>
            )}
          </span>
        ) : (
          <Badge status="success" text={state.toUpperCase()} />
        )}
      </div>
    </div>
  );
};

Tile.propTypes = {
  event: PropTypes.shape({
    league: PropTypes.string,
    HOME: PropTypes.object,
    AWAY: PropTypes.object,
    DRAW: PropTypes.object,
    start: PropTypes.string,
    state: PropTypes.string
  })
};

export default Tile;
