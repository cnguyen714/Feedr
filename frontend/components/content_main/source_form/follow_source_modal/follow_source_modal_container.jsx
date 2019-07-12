
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FollowSourceModal from "./follow_source_modal";
import { createFeed } from "../../../../actions/feed_actions";
import * as FollowAPIUtil from "../../../../util/follow_util"


const mapStateToProps = (state, ownProps) => ({
  source: ownProps.source,
  feeds: state.entities.feeds
});

const mapDispatchToProps = dispatch => ({
  createFeed: feed => dispatch(createFeed(feed)),
  followSource: follow => FollowAPIUtil.createFollow(follow),
  unfollowSource: follow => FollowAPIUtil.destroyFollow(follow),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowSourceModal));