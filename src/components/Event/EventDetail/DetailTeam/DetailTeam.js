import React from "react";
import { Typography, Skeleton } from "antd";
import "./DetailTeam.css";

const { Title } = Typography;

const DeatilTeam = ({ name, winning, score }) => {
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

export default DeatilTeam;
