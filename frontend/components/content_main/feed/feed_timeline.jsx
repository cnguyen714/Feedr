

import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import { fetchFeed } from "../../../actions/feed_actions";

class FeedTimeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  componentDidMount() {
    this.props.fetchFeed(this.props.match.params.feedId)
      .then(feed => this.setState(feed.feed));
  }

  render() {
    if (this.state === null) return null;


    return (
      <div>
        <header>
          Heyo
        </header>


      </div>
    );
  }
}

export default FeedTimeline;