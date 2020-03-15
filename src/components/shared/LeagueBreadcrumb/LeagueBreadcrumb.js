import React from "react";
import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import "./LeagueBreadcrumb.css";

const LeagueBreadcrumb = ({ history, style, league }) => {
  return (
    <Breadcrumb
      className="leagueBreadcrumb"
      separator={<RightOutlined style={style} />}
    >
      <Breadcrumb.Item
        className="leagueBreadcrumb"
        style={{ ...style, cursor: "pointer" }}
        onClick={() => history.push("/sports/football")}
      >
        FOOTBALL
      </Breadcrumb.Item>
      <Breadcrumb.Item className="leagueBreadcrumb" style={style}>
        {league}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

LeagueBreadcrumb.propTypes = {
  league: PropTypes.string,
  style: PropTypes.object,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(LeagueBreadcrumb);
