

import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import { Link, Redirect } from "react-router-dom";

class SourceTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSource(this.props.match.params.sourceId);
  }

  render() {
    let sourceId = this.props.match.params.sourceId;
    let source = this.props.sources[sourceId];
    if (source === undefined) return null;

    return (
      <div>
        <header>
          <h1>{source.name}</h1>
        </header>
      </div>
    );
  }
}

export default SourceTimeline;