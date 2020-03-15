import React from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";
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

ContractItem.propTypes = {
  item: PropTypes.shape({
    percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    decimal: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

export default ContractItem;
