
import React from "react";
import FeedsSourceIndexContainer from "./feeds_source_index_container";

class FeedsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      feeds: this.props.feeds
    }
  }

  componentWillMount() {
    this.props.fetchFeeds();
  }

  render() {
    if (!this.props.feeds) return null; 

    return (
      <div className="feeds-index">
        <header>
          FEEDS
        </header>

        <ul>
          {this.props.currentUser.subscribedFeeds.map(feedId => (
            <FeedsSourceIndexContainer feed={this.props.feeds[feedId]} key={`feed-${feedId}`}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default FeedsIndex;