import React from "react";
import { Typography } from "antd";
import { StarFilled } from "@ant-design/icons";
import PropTypes from "prop-types";

const { Title, Paragraph } = Typography;

const CategoryInfo = ({ sport, description }) => {
  if (!sport) return null;
  const style = {
    fontSize: "0.5em",
    verticalAlign: "0.2em",
    marginLeft: "10px",
    color: "#EAC924"
  };
  return (
    <div data-test="CategoryInfo">
      <Title data-test="title" style={{ color: "#fff" }} level={2}>
        {sport} odds <StarFilled style={style} />
      </Title>
      <Paragraph
        data-test="description"
        style={{ color: "#fff", maxWidth: 550, marginBottom: 40 }}
      >
        {description}
      </Paragraph>
    </div>
  );
};

CategoryInfo.propTypes = {
  sport: PropTypes.string,
  description: PropTypes.string
};

export default CategoryInfo;
