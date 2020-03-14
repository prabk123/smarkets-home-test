import React from "react";
import { Breadcrumb, Typography, Badge } from "antd";
import { RightOutlined, CalendarFilled } from "@ant-design/icons";
import Moment from "react-moment";
import "./FeatureTile.css";

const { Paragraph, Text } = Typography;

const FeatureTile = props => {
  const styles = { fontSize: 10, color: "#00b073", fontWeight: 700 };
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
          <Breadcrumb separator={<RightOutlined style={styles} />}>
            <Breadcrumb.Item style={styles}>FOOTBALL</Breadcrumb.Item>
            <Breadcrumb.Item style={styles}>{league}</Breadcrumb.Item>
          </Breadcrumb>
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
