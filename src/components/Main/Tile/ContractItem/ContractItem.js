import React from "react";
import { Typography } from "antd";
import "./ContractItem.css";

const { Text } = Typography;

const ContractItem = ({ item }) => {
  return (
    <div>
      <Text className="tile-contract-name">{item.name}</Text>
      <Text className="tile-price-perc">
        {item.percent ? `${item.percent}%` : "-"}
      </Text>
      {item.decimal ? (
        <Text className="tile-price-dec">{item.decimal}</Text>
      ) : null}
    </div>
  );
};

export default ContractItem;
