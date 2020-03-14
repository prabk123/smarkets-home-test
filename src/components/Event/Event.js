import React, { Component } from "react";
import { Typography } from "antd";

const { Title } = Typography;

class Event extends Component {
  render() {
    return (
      <div className="container">
        <Title level={3}>Team A</Title>
        <Title level={3}>Team B</Title>
      </div>
    );
  }
}

export default Event;
