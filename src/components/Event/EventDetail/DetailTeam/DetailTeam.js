import React from "react";
import { Typography, Skeleton } from "antd";
import PropTypes from "prop-types";
import "./DetailTeam.css";

const { Title } = Typography;

const DetailTeam = ({ name, winning, score }) => {
  const styles = winning ? { backgroundColor: "#00B073" } : null;
  return (
    <div className="eventDetail-team">
      {name ? (
        <Title level={3} className="eventDetail-team-name">
          {name}
        </Title>
      ) : (
        <Skeleton.Input style={{ width: "300px" }} active />
      )}
      {score !== null ? (
        <Title level={4} className="eventDetail-team-score" style={styles}>
          {score}
        </Title>
      ) : null}
    </div>
  );
};

DetailTeam.propTypes = {
  name: PropTypes.string,
  winning: PropTypes.bool,
  score: PropTypes.number
};

export default DetailTeam;
