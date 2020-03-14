import React from "react";
import { Typography } from "antd";
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
        {outcome.charAt(0).toUpperCase() + outcome.slice(1)}
      </Text>
    </div>
  );
};

export default ContractDetail;
