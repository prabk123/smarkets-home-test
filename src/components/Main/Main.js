import React, { Component } from "react";
import CategoryInfo from "./CategoryInfo";
import { connect } from "react-redux";
import { Skeleton } from "antd";
import { getEvents, resetEvents } from "../../actions/EventActions";
import { removeError } from "../../actions/ErrorActions";
import Tile from "./Tile";
import FeatureTile from "./FeatureTile";
import { Link } from "react-router-dom";
import { notification } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import "./Main.css";

const catDescription =
  "Smarkets betting exchange allows you to bet with the best Football odds - thanks to our small margins and industry-low 2% commission - on all tournaments and competitions, including Premier League, La Liga, Europa League and Champions League.";

class Main extends Component {
  componentDidMount() {
    this.props.removeError();
    this.props.getEvents();
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
    this.props.resetEvents();
  }

  handleError = () => {
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
        <CategoryInfo sport="Football" description={catDescription} />
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

Main.propTypes = {
  featuredImage: PropTypes.string,
  error: PropTypes.shape({
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    message: PropTypes.string
  }),
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ),
  getEvents: PropTypes.func,
  resetEvents: PropTypes.func,
  removeError: PropTypes.func,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    events: state.popularEvents,
    featuredImage: state.featuredImage,
    error: state.error
  };
};

export default connect(mapStateToProps, {
  getEvents,
  resetEvents,
  removeError
})(Main);
