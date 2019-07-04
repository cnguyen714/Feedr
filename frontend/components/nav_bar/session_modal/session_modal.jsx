
import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    
  }
};

class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      user: {
        username: null,
        email: null,
        password: null
      }
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  typeName() {
    return this.props.formType === "log in" ? "Log In" : "Sign Up";
  }

  handleInput(type) {

  }

  render() {
    return (
      <div>
        <button id={this.typeName()} onClick={this.openModal}>
          {this.typeName()}
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={this.props.formType}
          className="modal"
        >

          <button onClick={this.closeModal}>&times;</button>
          <i id="login-icon" />
          <i id="login-splash"/>
          <h1> 
            {this.props.formType === "log in"
              ? "Sign in to personalize your feedly and access it from everywhere."
              : `Create an account and access your feedly everywhere.`}
          </h1>
          <br></br>
          <form>
            <input />

          </form>

        </Modal>
      </div>
    );
  }
}

export default SessionModal;

