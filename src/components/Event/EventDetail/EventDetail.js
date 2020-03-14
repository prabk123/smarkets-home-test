import React from "react";
import DetailTeam from "./DetailTeam";
import "./EventDetail.css";

const EventDetail = props => {
  return (
    <div className="eventDetail-root">
      <DetailTeam />
      <DetailTeam />
    </div>
  );
};

export default EventDetail;
