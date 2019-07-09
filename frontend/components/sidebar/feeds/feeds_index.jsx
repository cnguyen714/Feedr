
import React from "react";
import FeedsSourceIndexContainer from "./feeds_source_index_container";

class FeedsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $.ajax()
      .then(() => this.props.fetchFeeds())
      .then(() => this.props.fetchSources())
      .then(() => this.props.setLoading(false));
  }

  render() {
    if (!this.props.feeds) return null; 

    return (
      <div className="feeds-index">
        <header>
          FEEDS
        </header>

        {this.props.loading 
          ? "Fetching Feeds..."
          : <ul>
              {this.props.currentUser.subscribedFeeds.map(feedId => (
                <FeedsSourceIndexContainer feed={this.props.feeds[feedId]} key={`feed-${feedId}`}/>
              ))}
            </ul>
        }
      </div>
    );
  }
}

export default FeedsIndex;