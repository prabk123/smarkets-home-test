import React, { Component } from "react";
import EventDetail from "./EventDetail";
import { getSingleEvent, resetSingleEvent } from "../../actions/EventActions";
import { connect } from "react-redux";
import MarketDetail from "./MarketDetail";

class Event extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getSingleEvent(match.params.event_id);
  }
  componentWillUnmount() {
    this.props.resetSingleEvent();
  }
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
  return { event: state.event };
};

export default connect(mapStateToProps, { getSingleEvent, resetSingleEvent })(
  Event
);
