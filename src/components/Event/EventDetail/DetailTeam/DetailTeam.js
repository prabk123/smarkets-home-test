import React from "react";
import { Typography } from "antd";
import "./DetailTeam.css";

const { Title } = Typography;

const DeatilTeam = props => {
  return (
    <div className="eventDetail-team">
      <Title level={3} className="eventDetail-team-name">
        Team A
      </Title>
      <Title level={4} className="eventDetail-team-score">
        2
      </Title>
    </div>
  );
};

export default DeatilTeam;
