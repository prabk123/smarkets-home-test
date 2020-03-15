import React from "react";
import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./LeagueBreadcrumb.css";

const LeagueBreadcrumb = props => {
  return (
    <Breadcrumb
      className="leagueBreadcrumb"
      separator={<RightOutlined style={props.style} />}
    >
      <Breadcrumb.Item style={props.style}>
        <Link to="/sports/football">
          <span className="leagueBreadcrumb">FOOTBALL</span>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item className="leagueBreadcrumb" style={props.style}>
        {props.league}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

LeagueBreadcrumb.propTypes = {
  league: PropTypes.string,
  style: PropTypes.object
};

export default LeagueBreadcrumb;
