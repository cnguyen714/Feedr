
import React from "react";
import FeedsIndexItem from "./feeds_index_item";

class FeedsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="feeds-index">
        Feeds Index
        <FeedsIndexItem />
      </div>
    );
  }
}

export default FeedsIndex;