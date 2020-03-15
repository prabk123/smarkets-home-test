import React from "react";
import { Typography, Badge } from "antd";
import { CalendarFilled } from "@ant-design/icons";
import Moment from "react-moment";
import "./FeatureTile.css";
import LeageBreadcrumb from "../../shared/LeagueBreadcrumb";
import PropTypes from "prop-types";

const { Paragraph, Text } = Typography;

const FeatureTile = props => {
  if (!props.event) return null;
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
    <div
      data-test="FeatureTile"
      className="eventList-feature"
      onClick={props.onClick}
    >
      <img
        className="eventList-feature-image"
        src={`https://${image}`}
        alt="Feature Tile"
      />
      <div className="eventList-feature-content">
        <div>
          <LeageBreadcrumb league={league} style={styles} />
          <div className="eventList-feature-title">
            <Paragraph data-test="team" className="eventList-feature-team">
              {HOME.name}
            </Paragraph>
            <Paragraph data-test="team" className="eventList-feature-team">
              {AWAY.name}
            </Paragraph>
          </div>
        </div>
        <div className="eventList-feature-pricing">
          <Paragraph
            data-test="feature-team"
            className="eventList-feature-contract"
          >
            {HOME.name}
          </Paragraph>
          <div>
            <Text data-test="percent" className="eventList-feature-percent">
              {HOME.percent ? `${HOME.percent}%` : "-"}
            </Text>
            {HOME.decimal ? (
              <Text data-test="decimal" className="tile-price-dec">
                {HOME.decimal}
              </Text>
            ) : null}
          </div>
          <div data-test="status">
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

FeatureTile.propTypes = {
  image: PropTypes.string,
  event: PropTypes.shape({
    league: PropTypes.string,
    HOME: PropTypes.shape({
      name: PropTypes.string
    }),
    AWAY: PropTypes.shape({
      name: PropTypes.string
    }),
    start: PropTypes.string,
    state: PropTypes.string
  }),
  onClick: PropTypes.func
};

export default FeatureTile;
