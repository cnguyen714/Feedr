
import React from "react";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import { Route, Switch } from "react-router-dom";
import FeedTimelineContainer from "./feed/feed_timeline_container";

class ContentMain extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="content-frame sidebar-offset">
        <div className="content">
          <Switch>
            <Route exact to="/feeds/:feedId" component={FeedTimelineContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ContentMain;