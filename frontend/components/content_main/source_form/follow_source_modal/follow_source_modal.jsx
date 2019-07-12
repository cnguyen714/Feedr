
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

  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ 
      modalIsOpen: false,
      formType: "feed"
    });
  }

  handleFollow(feed_id) {
    this.props.followSource({feed_id: feed_id, source_id: this.props.source.id})
  }

  handleUnfollow(follow_id) {
    this.props.unfollowSource(follow_id)
  }

  handleInput(type) {
    return (e) => {

      let nextState = Object.assign({}, this.state)
      nextState.feed[type] = e.target.value;
      
      this.setState(nextState);
    };
  }

   handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>
          
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="follow-modal"
        >

        <ul>

        {this.state.feeds.map(feed => {
            return <button onClick={this.handleFollow}>{feed.name} </button>
          })
        }
        </ul>


        </Modal>
      </div>
    );
  }
}

export default FollowSourceModal;

