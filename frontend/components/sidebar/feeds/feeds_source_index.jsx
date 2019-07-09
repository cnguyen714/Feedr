

import React from "react";
import FeedsSourceIndexItem from "./feeds_source_index_item";
import { Link } from "react-router-dom";

class FeedsSourceIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.feed === undefined) {
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
          <FeedsSourceIndexItem source={null} />
        </ul>
      </li>
    );
  }
}

export default FeedsSourceIndex;