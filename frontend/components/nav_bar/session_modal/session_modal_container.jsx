
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SessionModal from "./session_modal";
import { login, createNewUser } from "../../../actions/session_actions";
import { pushErrors, dropErrors } from "../../../actions/session_error_actions";

const mapStateToProps = (state, ownProps) => ({
  formType: ownProps.formType,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  createNewUser: user => dispatch(createNewUser(user)),
  pushErrors: errors => dispatch(pushErrors(errors)),
  dropErrors: () => dispatch(dropErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionModal));