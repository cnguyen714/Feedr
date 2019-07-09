
import * as FeedAPIUtil from "../util/feed_util";

export const RECEIVE_FEEDS = "RECEIVE_FEEDS";
export const RECEIVE_FEED = "RECEIVE_FEED";
export const REMOVE_FEED = "REMOVE_FEED";

const receiveFeeds = feeds => ({
  type: RECEIVE_FEEDS,
  feeds
});

const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});

const removeFeed = feed => ({
  type: REMOVE_FEED,
  feed
});

export const fetchFeeds = () => dispatch => FeedAPIUtil.fetchFeeds()
  .then(feed => dispatch(receiveFeeds(feed)));

export const fetchFeed = id => dispatch => FeedAPIUtil.fetchFeed(id)
  .then(feed => dispatch(receiveFeed(feed)));

export const createFeed = feed => dispatch => FeedAPIUtil.createFeed(feed)
  .then(feed => dispatch(receiveFeed(feed)));

export const updateFeed = feed => dispatch => FeedAPIUtil.updateFeed(feed)
  .then(feed => dispatch(receiveFeed(feed)));

export const destroyFeed = id => dispatch => FeedAPIUtil.destroyFeed(id)
  .then(feed => dispatch(removeFeed(feed)));
