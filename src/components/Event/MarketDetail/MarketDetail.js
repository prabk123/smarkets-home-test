import React from "react";
import { Collapse, Typography, Divider } from "antd";
import "./MarketDetail.css";
import ContractDetail from "./ContractDetail";
import PropTypes from "prop-types";

const { Panel } = Collapse;
const { Title, Text } = Typography;

const MarketDetail = props => {
  const dividerStyle = { margin: 0 };
  const { title, contracts } = props;
  return (
    <Collapse
      className="market-panel"
      defaultActiveKey={title === "Full-time result" ? ["1"] : null}
      expandIconPosition={"right"}
    >
      <Panel header={<Title level={3}>{title}</Title>} key="1">
        <div className="market-panel-header">
          <Text>Contract</Text>
          <Text className="market-right-align">Last Traded Price</Text>
          <Text className="market-right-align">Status</Text>
        </div>
        <Divider style={dividerStyle} />
        {contracts.map(x => (
          <ContractDetail
            key={x.id}
            name={x.name}
            percent={x.percent}
            decimal={x.decimal}
            outcome={x.state_or_outcome}
          />
        ))}
      </Panel>
    </Collapse>
  );
};

MarketDetail.propTypes = {
  title: PropTypes.string,
  contracts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      decimal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      outcome: PropTypes.string
    })
  )
};

export default MarketDetail;
