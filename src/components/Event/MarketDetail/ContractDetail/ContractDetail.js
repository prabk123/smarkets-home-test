import React from "react";
import { Typography } from "antd";
import { StarFilled } from "@ant-design/icons";
import "./ContractDetail.css";

const { Text } = Typography;

const ContractDetail = props => {
  const { name, percent, decimal, outcome } = props;
  return (
    <div className="contractDetail-root">
      <Text className="contract-name">{name}</Text>
      <div className="contract-prices">
        <Text className="contract-perc">{percent ? `${percent}%` : "-"}</Text>
        {decimal ? <Text className="contract-dec">{decimal}</Text> : null}
      </div>
      <Text className="contract-outcome">
        {outcome === "winner" ? (
          <span className="winner">
            <StarFilled className="winner-star" />
            {outcome.toUpperCase()}
          </span>
        ) : (
          outcome.toUpperCase()
        )}
      </Text>
    </div>
  );
};

export default ContractDetail;
