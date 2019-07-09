

import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import { Redirect } from "react-router-dom";

class FeedTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchFeed(this.props.match.params.feedId);
  }

  render() {
    let feedId = this.props.match.params.feedId;
    let feed = this.props.feeds[feedId];
    if (feed === undefined) return null;

    return (
      <div>
        <header>
          <h1>{feed.name}</h1>
        </header>


      </div>
    );
  }
}

export default FeedTimeline;