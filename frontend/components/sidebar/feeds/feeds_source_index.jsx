

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
        <header className="select">
          <Link to="">{this.props.feed.name}</Link>
        </header>

        <ul>
          <FeedsSourceIndexItem source={null} />
        </ul>
      </li>
    );
  }
}

export default FeedsSourceIndex;