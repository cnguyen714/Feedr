
import React from "react";
import Modal from "react-modal";

class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialFormType: this.props.formType,
      formType: this.props.formType,
      modalIsOpen: false,
      user: {
        username: "",
        email: "",
        password: ""
      }
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.switchSessionModal = this.switchSessionModal.bind(this);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ 
      modalIsOpen: false,
      formType: this.state.initialFormType 
    });
    if (this.props.errors.length !== 0) this.props.dropErrors();
  }

  switchSessionModal(e) {
    e.preventDefault();

    this.isLoginForm()
      ? this.setState({formType: "signup"})
      : this.setState({formType: "login"});
    if (this.props.errors.length !== 0) this.props.dropErrors();
  }

  isLoginForm() {
    return this.state.formType === "login"
  }

  typeName() {
    return this.isLoginForm() ? "Log In" : "Sign Up";
  }

  handleInput(type) {
    return (e) => {

      let nextState = Object.assign({}, this.state)
      nextState.user[type] = e.target.value;
      
      this.setState(nextState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.isLoginForm()) {
      this.props.login(this.state.user)
        .then(() => this.props.history.push("/"))
        .then(() => this.closeModal,
        errors => this.props.pushErrors(errors));
    } else {
      this.props.createNewUser(this.state.user)
        .then(() => this.props.history.push("/"))
        .then(() => this.closeModal,
        errors => this.props.pushErrors(errors));
    }
  }

  handleDemo(e) {
    e.preventDefault();
    let demoUser = {
      email: "demo@feedr.com",
      password: "password"
    };

    this.setState({ 
      formType: "login",
      user: {
        email: "demo@feedr.com",
        password: "password"
      }
    });

    this.props.login(demoUser)
  }

  render() {
    return (
      <div>
        <button id={this.state.initialFormType} onClick={this.openModal}
          className={!this.isLoginForm() ? "signup-form" : null}>
          {this.state.initialFormType === "login" ? "Log In" : "Sign Up"}
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={this.state.formType}
          className="modal"
        >

          <button className="close-button" onClick={this.closeModal}>&times;</button>
          <i className="logo-icon" />
          <i id="login-splash"/>
        
          <h1> 
            {this.isLoginForm()
              ? "Sign in to personalize your feedr and access it from everywhere." 
              : `Create an account and access your feedr everywhere.`
            }
          </h1>

          {this.props.errors.length !== 0 
            ? <ul className="errors">
              {this.props.errors.map(error => 
                <li key={error}>{error}</li>  
              )}
            </ul>
            : null
          }  
          <form onSubmit={this.handleSubmit}>
            <ul>
              <li><input 
                className="input-text input-top" 
                type="email" 
                placeholder="Email" 
                value={this.state.user.email}
                onChange={this.handleInput("email")}
              /></li>

              {!this.isLoginForm() 
                ? <li><input 
                  className="input-text" 
                  type="text" 
                  placeholder="Username" 
                  value={this.state.user.username}
                  onChange={this.handleInput("username")}
                /></li>
                : null
              }

              <li><input 
                className="input-text input-bottom" 
                type="password" 
                placeholder="Password" 
                onFocus={(e) => e.target.placeholder='6 characters min'} 
                onBlur={(e) => e.target.placeholder='Password'} 
                value={this.state.user.password}
                onChange={this.handleInput("password")}
              /></li>
            </ul>
            <input type="submit" 
              className="submit-button" 
              value={this.isLoginForm() 
                ? "Login" : "Create My Account"}
            />
          </form>

          <a onClick={this.switchSessionModal}>
            {this.isLoginForm()
              ? "New user? Sign up" : "Existing user? Login"
            }
          </a>

          <form onSubmit={this.handleDemo}>
            <input 
              type ="submit" 
              className="submit-button demo-login" 
              value="Demo Login" 
            />
          </form>

        </Modal>
      </div>
    );
  }
}

export default SessionModal;

