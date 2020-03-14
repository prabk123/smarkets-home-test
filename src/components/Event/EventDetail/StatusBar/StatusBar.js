import React from "react";
import { Badge, Typography } from "antd";
import { ClockCircleOutlined, CalendarFilled } from "@ant-design/icons";
import Moment from "react-moment";
import "./StatusBar.css";

const { Text } = Typography;

const StatusBar = ({ status, start, clock, matchPeriod }) => {
  const calendarStrings = {
    lastDay: "[Yesterday at] LT",
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    lastWeek: "[last] dddd [at] LT",
    nextWeek: "dddd [at] LT",
    sameElse: "L"
  };
  let mins;
  if (clock && !clock.stopped) {
    mins = clock.match_time.split(":");
    mins = +mins[0] * 60 + +mins[1];
  }
  return (
    <div className="statusBar-root">
      {status ? (
        <span>
          <div className="statusBar-status">
            <Badge status="success" text={status.toUpperCase()} />
          </div>
          {status !== "ended" ? (
            <div className="statusBar-runtime">
              <ClockCircleOutlined className="statusBar-runtime-blue" />
              <Text className="statusBar-text statusBar-runtime-blue">
                {clock && clock.stopped ? matchPeriod : `${mins}'`}
              </Text>
            </div>
          ) : null}
        </span>
      ) : null}
      <div className="statusBar-datetime">
        <CalendarFilled />
        <Text className="statusBar-text">
          <Moment calendar={calendarStrings}>{start}</Moment>
        </Text>
      </div>
    </div>
  );
};

export default StatusBar;
