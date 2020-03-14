import React from "react";
import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";
import "./LeagueBreadcrumb.css";

const LeagueBreadcrumb = props => {
  return (
    <Breadcrumb
      className="leagueBreadcrumb"
      separator={<RightOutlined style={props.style} />}
    >
      <Breadcrumb.Item className="leagueBreadcrumb" style={props.style}>
        FOOTBALL
      </Breadcrumb.Item>
      <Breadcrumb.Item className="leagueBreadcrumb" style={props.style}>
        {props.league}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default LeagueBreadcrumb;
