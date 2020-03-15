import React from "react";
import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import "./LeagueBreadcrumb.css";

const LeagueBreadcrumb = ({ history, style, league }) => {
  if (!league) return null;
  return (
    <Breadcrumb
      className="leagueBreadcrumb"
      separator={<RightOutlined style={style} />}
      data-test="leagueBreadcrumb"
    >
      <Breadcrumb.Item
        className="leagueBreadcrumb"
        style={{ ...style, cursor: "pointer" }}
        onClick={() => history.push("/sports/football")}
        data-test="breadcrumbItem"
      >
        FOOTBALL
      </Breadcrumb.Item>
      <Breadcrumb.Item
        className="leagueBreadcrumb"
        style={style}
        data-test="breadcrumbItem"
      >
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
export { LeagueBreadcrumb as PureLeagueBreadcrumb };
