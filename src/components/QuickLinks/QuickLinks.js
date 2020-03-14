import React from "react";
import MenuItem from "./MenuItem";

import "../shared/styles/SideBar.css";
import { Typography } from "antd";

const { Paragraph } = Typography;

const QuickLinks = () => {
  let arr = new Array(4).fill(0);
  let arr2 = new Array(8).fill(0);
  const links = arr.map((x, i) => <MenuItem key={i} />);
  const links2 = arr2.map((x, i) => <MenuItem key={i} />);
  return (
    <div className="sideBar-root">
      <Paragraph className="quicklinks-header">QUICK LINKS</Paragraph>
      {links}
      <Paragraph className="quicklinks-header">CATEGORIES</Paragraph>
      {links2}
    </div>
  );
};

export default QuickLinks;
