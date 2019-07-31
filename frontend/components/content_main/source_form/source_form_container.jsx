
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SourceForm from "./source_form";
import { createSource } from "../../../actions/source_actions";
import { pushErrors, dropErrors } from "../../../actions/source_error_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.source
});

const mapDispatchToProps = dispatch => ({
  createSource: source => dispatch(createSource(source)),
  pushErrors: errors => dispatch(pushErrors(errors)),
  dropErrors: () => dispatch(dropErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SourceForm));
