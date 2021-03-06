import React from "react";
import { Badge, Typography } from "antd";
import { ClockCircleOutlined, CalendarFilled } from "@ant-design/icons";
import Moment from "react-moment";
import PropTypes from "prop-types";
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
    <div className="statusBar-root" data-test="StatusBar">
      {status ? (
        <span>
          <div className="statusBar-status">
            <Badge
              data-test="statusBadge"
              status="success"
              text={status.toUpperCase()}
            />
          </div>
          {status === "live" ? (
            <div className="statusBar-runtime">
              <ClockCircleOutlined className="statusBar-runtime-blue" />
              <Text
                data-test="clock"
                className="statusBar-text statusBar-runtime-blue"
              >
                {clock && clock.stopped ? matchPeriod : `${mins}'`}
              </Text>
            </div>
          ) : null}
        </span>
      ) : null}
      <div className="statusBar-datetime">
        <CalendarFilled />
        <Text className="statusBar-text">
          <Moment data-test="date" calendar={calendarStrings}>
            {start}
          </Moment>
        </Text>
      </div>
    </div>
  );
};

StatusBar.propTypes = {
  status: PropTypes.string,
  start: PropTypes.string,
  clock: PropTypes.shape({
    stopped: PropTypes.bool,
    match_time: PropTypes.string
  }),
  matchPeriod: PropTypes.string
};

export default StatusBar;
