import React from "react";
import PopularEvent from "./PopularEvent";

import "../shared/styles/SideBar.css";
import { Typography, Divider } from "antd";

const { Paragraph } = Typography;

const PopularEvents = () => {
  const arr = new Array(5).fill(0);
  const list = arr.map((x, i) => (
    <span key={i}>
      <Divider />
      <PopularEvent />
    </span>
  ));
  return (
    <div className="sideBar-root">
      <Paragraph className="popularEvents-header">POPULAR EVENTS</Paragraph>
      {list}
    </div>
  );
};

export default PopularEvents;
