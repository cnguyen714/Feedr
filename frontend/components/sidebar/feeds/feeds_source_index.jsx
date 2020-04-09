

import React from "react";
import FeedsSourceIndexItem from "./feeds_source_index_item";
import { Link } from "react-router-dom";

class FeedsSourceIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {

  }

  onClick(e) {
    $(`.select`).removeClass("selected");
    e.target.classList.add("selected")  
  }

  render() {
    if (this.props.loading || this.props.feed === undefined) {
      return null;
    }

    return (
      <li className="feeds-source-index">
        <div onClick={this.onClick}> 
          <Link to={`/feeds/${this.props.feed.id}`} >
            <header className="select feed-index-item">
              {this.props.feed.name}
            </header>
          </Link>
        </div>

        <ul>
          {this.props.feed.sourceIds.map(sourceId => (
            <div onClick={this.onClick} key={`source-idx-${sourceId}`}> 
              <Link to={`/sources/${sourceId}`}>
                <FeedsSourceIndexItem source={this.props.sources[sourceId]} />
              </Link>
            </div>
          ))}
        </ul>
      </li>
    );
  }
}

export default FeedsSourceIndex;