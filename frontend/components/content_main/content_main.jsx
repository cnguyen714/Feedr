
import React from "react";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import { Route, Switch } from "react-router-dom";
import FeedTimelineContainer from "./feed/feed_timeline_container";
import SourceTimelineContainer from "./source/source_timeline_container";

class ContentMain extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="content-frame sidebar-offset">
        <div className="content">
          <Route exact path="/feeds/:feedId" component={FeedTimelineContainer} />
          <Route exact path="/sources/:sourceId" component={SourceTimelineContainer} />
        </div>
      </div>
    );
  }
}

export default ContentMain;