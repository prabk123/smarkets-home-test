import React, { Component } from "react";
import CategoryInfo from "./CategoryInfo";
import { connect } from "react-redux";
import { Skeleton } from "antd";
import { getEvents, resetEvents } from "../../actions/EventActions";
import Tile from "./Tile";
import FeatureTile from "./FeatureTile";
import { Link } from "react-router-dom";
import { notification } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./Main.css";

class Main extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  componentDidUpdate() {
    const { error } = this.props;
    if (error) {
      this.handleError();
    }
  }

  componentWillUnmount() {
    this.props.resetEvents();
  }

  handleError = () => {
    if (this.props.error) {
      notification.open({
        message: this.props.error.message,
        duration: null,
        style: {
          backgroundColor: "#00b073"
        },
        icon: <CloseCircleOutlined style={{ backgroundColor: "#00b073" }} />
      });
    }
  };

  render() {
    const { events, featuredImage } = this.props;
    const feature = events[0];
    const eventsList = events.map((x, i) => {
      if (i > 0) {
        return (
          <Link to={`/sports/football/events/${x.id}`} key={x.id}>
            <Tile event={x} />
          </Link>
        );
      }
    });
    return (
      <div className="container">
        <CategoryInfo />
        {events.length > 0 ? (
          <div className="eventList-view">
            <FeatureTile
              event={feature}
              image={featuredImage}
              onClick={() =>
                this.props.history.push(`/sports/football/events/${feature.id}`)
              }
            />
            {eventsList}
          </div>
        ) : (
          <div className="eventList-view">
            <div className="eventList-feature tile">
              <Skeleton active paragraph={{ rows: 2 }} />
            </div>
            {new Array(4).fill(0).map((x, i) => {
              return (
                <div key={i} className="tile tile-background">
                  <Skeleton active paragraph={{ rows: 2 }} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.popularEvents,
    featuredImage: state.featuredImage,
    error: state.error
  };
};

export default connect(mapStateToProps, { getEvents, resetEvents })(Main);
