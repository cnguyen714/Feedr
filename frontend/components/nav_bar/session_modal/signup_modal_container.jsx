
import React from "react";
import { connect } from "react-redux";
import SessionModal from "./session_modal";
import { createNewUser } from "../../../actions/session_actions";

const mapStateToProps = state => ({
  formType: "sign up"
});

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(createNewUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionModal)