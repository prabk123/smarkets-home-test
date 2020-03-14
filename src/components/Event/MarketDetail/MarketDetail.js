import React from "react";
import { Collapse, Typography, Divider } from "antd";
import "./MarketDetail.css";
import ContractDetail from "./ContractDetail";

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

export default MarketDetail;
