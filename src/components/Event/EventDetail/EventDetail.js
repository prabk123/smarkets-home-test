import React from "react";
import DetailTeam from "./DetailTeam";
import LeageBreadcrumb from "../../shared/LeagueBreadcrumb";
import { Divider, Skeleton } from "antd";
import StatusBar from "./StatusBar";
import PropTypes from "prop-types";

const EventDetail = props => {
  const { event } = props;
  let homeScore = null;
  let awayScore = null;
  if (event && event.state.scores) {
    if (event.state.scores.current) {
      homeScore = event.state.scores.current[0];
      awayScore = event.state.scores.current[1];
    } else {
      homeScore = event.state.scores.full[0];
      awayScore = event.state.scores.full[1];
    }
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

EventDetail.propTypes = {
  event: PropTypes.shape({
    home: PropTypes.string,
    away: PropTypes.string,
    state: PropTypes.shape({
      state: PropTypes.string,
      start_datetime: PropTypes.string,
      clock: PropTypes.object,
      match_period: PropTypes.string,
      scores: PropTypes.shape({
        current: PropTypes.array
      })
    })
  })
};

export default EventDetail;
