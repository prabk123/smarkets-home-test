import React from "react";
import { Breadcrumb, Typography, Badge } from "antd";
import { RightOutlined, CalendarFilled } from "@ant-design/icons";
import Moment from "react-moment";
import "./FeatureTile.css";
import LeageBreadcrumb from "../../shared/LeagueBreadcrumb";

const { Paragraph, Text } = Typography;

const FeatureTile = props => {
  const styles = { fontSize: 10 };
  const { image, event } = props;
  const { league, HOME, AWAY, start, state } = event;
  let date = null;
  let diff =
    (new Date(start).getTime() - new Date().getTime()) / 1000 / 60 / 60;
  if (state === "upcoming") {
    date = start;
  }
  return (
    <div className="eventList-feature" onClick={props.onClick}>
      <img className="eventList-feature-image" src={`https://${image}`} />
      <div className="eventList-feature-content">
        <div>
          <LeageBreadcrumb league={league} style={styles} />
          <div className="eventList-feature-title">
            <Paragraph className="eventList-feature-team">
              {HOME.name}
            </Paragraph>
            <Paragraph className="eventList-feature-team">
              {AWAY.name}
            </Paragraph>
          </div>
        </div>
        <div className="eventList-feature-pricing">
          <Paragraph className="eventList-feature-contract">
            {HOME.name}
          </Paragraph>
          <div>
            <Text className="eventList-feature-percent">
              {HOME.percent ? `${HOME.percent}%` : "-"}
            </Text>
            {HOME.decimal ? (
              <Text className="tile-price-dec">{HOME.decimal}</Text>
            ) : null}
          </div>
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
              <Badge status="success" text="Live" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTile;
