import React, { Component } from "react";
import EventDetail from "./EventDetail";
import { getSingleEvent, resetSingleEvent } from "../../actions/EventActions";
import { removeError } from "../../actions/ErrorActions";
import { connect } from "react-redux";
import MarketDetail from "./MarketDetail";
import { notification } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

class Event extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.removeError();
    this.props.getSingleEvent(match.params.event_id);
  }
  componentDidUpdate() {
    const { error } = this.props;
    if (error) {
      this.handleError();
    } else {
      this.props.removeError();
    }
  }
  componentWillUnmount() {
    notification.destroy();
    this.props.resetSingleEvent();
  }
  handleError = () => {
    console.log(this.props.error);
    if (this.props.error) {
      notification.open({
        message: `${this.props.error.status} Error`,
        description: this.props.error.message,
        duration: null,
        style: {
          backgroundColor: "#00b073"
        },
        icon: <CloseCircleOutlined style={{ backgroundColor: "#00b073" }} />
      });
    }
  };
  render() {
    const { event } = this.props;
    return (
      <div className="container">
        <EventDetail event={event} />
        <div className="market-container">
          {event
            ? event.markets.map(x => (
                <MarketDetail
                  key={x.id}
                  title={x.name}
                  contracts={x.contracts}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { event: state.event, error: state.error };
};

export default connect(mapStateToProps, {
  getSingleEvent,
  resetSingleEvent,
  removeError
})(Event);
