import React from "react";
import { Typography } from "antd";
import { StarFilled } from "@ant-design/icons";
import PropTypes from "prop-types";

const { Title, Paragraph } = Typography;

const CategoryInfo = ({ sport, description }) => {
  const style = {
    fontSize: "0.5em",
    verticalAlign: "0.2em",
    marginLeft: "10px",
    color: "#EAC924"
  };
  return (
    <div>
      <Title style={{ color: "#fff" }} level={2}>
        {sport} odds <StarFilled style={style} />
      </Title>
      <Paragraph style={{ color: "#fff", maxWidth: 550, marginBottom: 40 }}>
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
