

import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import { fetchFeed } from "../../../actions/feed_actions";
import { Redirect } from "react-router-dom";

class FeedTimeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
  }


  render() {
    


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