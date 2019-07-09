

import React from "react";
import FeedsSourceIndexItem from "./feeds_source_index_item";
import { Link } from "react-router-dom";

class FeedsSourceIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  render() {
    if (this.props.loading || this.props.feed === undefined) {
      return null;
    }

    return (
      <li className="feeds-source-index">
        <Link to={`/feeds/${this.props.feed.id}`} >
          <header className="select">
            {this.props.feed.name}
          </header>
        </Link>

        <ul>
          {this.props.feed.sourceIds.map(sourceId => (
            <FeedsSourceIndexItem key={`source-idx-${sourceId}`} source={this.props.sources[sourceId]} />
          ))}
        </ul>
      </li>
    );
  }
}

export default FeedsSourceIndex;