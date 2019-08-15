
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FollowSourceModal from "./follow_source_modal";
import { createFeed, fetchFeed } from "../../../../actions/feed_actions";
// import {  } from "../../../../actions/follow_actions";
import * as FollowAPIUtil from "../../../../util/follow_util"


const mapStateToProps = (state, ownProps) => ({
  source: ownProps.source,
  feeds: Object.values(state.entities.feeds)
});

const mapDispatchToProps = dispatch => ({
  createFeed: feed => dispatch(createFeed(feed)),
  followSource: follow => FollowAPIUtil.createFollow(follow),
  unfollowSource: id => FollowAPIUtil.destroyFollow(id),
  fetchFeed: id => dispatch(fetchFeed(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowSourceModal));