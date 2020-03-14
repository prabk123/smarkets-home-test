import React from "react";
import { Typography } from "antd";
import { StarFilled } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const CategoryInfo = () => {
  return (
    <div>
      <Title style={{ color: "#fff" }} level={2}>
        Football odds{" "}
        <StarFilled
          style={{
            fontSize: "0.5em",
            verticalAlign: "0.2em",
            marginLeft: "10px",
            color: "#EAC924"
          }}
        />
      </Title>
      <Paragraph style={{ color: "#fff", maxWidth: 550, marginBottom: 40 }}>
        Smarkets betting exchange allows you to bet with the best Football odds
        - thanks to our small margins and industry-low 2% commission - on all
        tournaments and competitions, including Premier League, La Liga, Europa
        League and Champions League.
      </Paragraph>
    </div>
  );
};

export default CategoryInfo;
