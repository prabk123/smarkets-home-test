import React from "react";
import DetailTeam from "./DetailTeam";
import "./EventDetail.css";
import LeageBreadcrumb from "../../shared/LeagueBreadcrumb";
import { Divider, Skeleton } from "antd";
import StatusBar from "./StatusBar";

const EventDetail = props => {
  const { event } = props;
  let homeScore = null;
  let awayScore = null;
  if (event && event.state.scores) {
    homeScore = event.state.scores.current[0];
    awayScore = event.state.scores.current[1];
  }
  return (
    <div>
      {event ? (
        <div className="eventDetail-root">
          <LeageBreadcrumb league={"PREMIER LEAGUE"} />
          <Divider />
          <DetailTeam
            name={event.home}
            score={homeScore}
            winning={homeScore > awayScore}
          />
          <DetailTeam
            name={event.away}
            score={awayScore}
            winning={awayScore > homeScore}
          />
          <StatusBar
            status={event.state.state}
            start={event.start_datetime}
            clock={event.state.clock}
            matchPeriod={event.state.match_period.split("_").join(" ")}
          />
          <Divider />
        </div>
      ) : (
        <div>
          <Skeleton.Input style={{ width: "300px" }} active />
          <Divider />
          {new Array(2).fill(0).map((x, i) => {
            return <DetailTeam key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default EventDetail;
