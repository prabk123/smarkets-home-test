import React, { Component } from "react";
import CategoryInfo from "./CategoryInfo";
import { connect } from "react-redux";
import { Skeleton } from "antd";
import { getEvents } from "../../actions/EventActions";
import Tile from "./Tile";
import FeatureTile from "./FeatureTile";
import { Link } from "react-router-dom";
import "./Main.css";

class Main extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events, featuredImage } = this.props;
    const feature = events[0];
    const eventsList = events.map((x, i) => {
      if (i > 0) {
        return (
          <Link to={`/events/${x.id}`} key={x.id}>
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
              onClick={() => this.props.history.push(`/events/${feature.id}`)}
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
    featuredImage: state.featuredImage
  };
};

export default connect(mapStateToProps, { getEvents })(Main);
