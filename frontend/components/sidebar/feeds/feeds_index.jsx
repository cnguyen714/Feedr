
import React from "react";
import FeedsSourceIndexContainer from "./feeds_source_index_container";
import { Link } from "react-router-dom";

class FeedsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $.ajax()
      .then(() => this.props.fetchFeeds())
      .then(() => this.props.fetchSources())
      .then(() => this.props.setLoading(false))
  }

  componentDidUpdate(prevProps) {

  }

  onClick(e) {
    $(`.select`).removeClass("selected");
    e.target.classList.add("selected")  
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
              <div onClick={this.onClick}> 
                <Link to={`/`}>
                  <header className="select feed-index-item feeds-source-index all-feed">
                    All Feeds
                  </header>
                </Link>
              </div>

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