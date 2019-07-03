
import React from "react";
import { connect } from "react-redux";
import SessionModal from "./session_modal";
import { login } from "../../../actions/session_actions";

const mapStateToProps = state => ({
  formType: "log in"
});

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionModal);