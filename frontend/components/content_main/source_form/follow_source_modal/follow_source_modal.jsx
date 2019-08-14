
import React from "react";
import Modal from "react-modal";

class FollowSourceModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: "follow",
      modalIsOpen: false,
      feed: {
        name: ""
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.switchModal = this.switchModal.bind(this);
    this.handleSubmitFeed = this.handleSubmitFeed.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ 
      modalIsOpen: false,
      formType: "follow"
    });
  }

  switchModal(e) {
    e.preventDefault();

    this.state.formType === "follow"
      ? this.setState({ formType: "feed" })
      : this.setState({ formType: "follow" });
  }

  handleFollow(feed_id) {
    return (e) => {
      e.preventDefault();
      return this.props.followSource({feed_id: feed_id, source_id: this.props.source.id})
        .then(() => this.props.fetchFeed(feed_id))
    }
  }

  handleUnfollow(follow_id) {
    return (e) => {
      e.preventDefault();
      return this.props.followSource({ feed_id: feed_id, source_id: this.props.source.id })
        .then(() => this.props.fetchFeed(feed_id))
    }
  }

  handleInput(type) {
    return (e) => {

      let nextState = Object.assign({}, this.state)
      nextState.feed[type] = e.target.value;
      
      this.setState(nextState);
    };
  }

   handleSubmitFeed(e) {
    e.preventDefault();

    this.props.createFeed(this.state.feed)
      .then(payload => this.props.followSource({ feed_id: payload.feed.id, source_id: this.props.source.id }))
      .then(payload => this.props.fetchFeed(payload.id))
    this.closeModal();
  }

  render() {
    return (
      <div className="follow-modal-base">
        <button onClick={this.openModal}>
          FOLLOW
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="follow-modal"
        >
          { this.state.formType === "follow" 
            ? <ul>

                {this.props.feeds.map(feed => {
                  return <li key={`feed-follow-${feed.id}`}>
                    <p className="feed-follow-item">
                      {feed.name}
                      { feed.sourceIds.includes(this.props.source.id)
                        ? <button onClick={this.handleUnfollow(feed.id)}>Unfollow</button>
                        : <button onClick={this.handleFollow(feed.id)}>Follow</button> }
                    </p>
                  </li>
                })
                }
              </ul>
            : <form onSubmit={this.handleSubmitFeed}>
                <input type="text" placeholder="Feed name" value={this.state.feed.name} onChange={this.handleInput("name")} />
                <input type="submit" value="Create new feed" />
              </form>
          }
              
          {this.state.formType === "follow" 
            ? <button className="new-feed-button" onClick={this.switchModal}>New Feed</button>
            : null
          }


        </Modal>
      </div>
    );
  }
}

export default FollowSourceModal;

