
import * as SourceAPIUtil from "../util/source_util";

export const RECEIVE_SOURCE = "RECEIVE_SOURCE";
export const REMOVE_SOURCE = "REMOVE_SOURCE";

const receiveSource = source => ({
  type: RECEIVE_SOURCE,
  feed
});

const removeSource = source => ({
  type: REMOVE_SOURCE,
  feed
});

export const fetchSource = (id) => dispatch => SourceAPIUtil.fetchSource(id)
  .then(source => dispatch(receiveSource(source)));

export const createSource = (source) => dispatch => SourceAPIUtil.createSource(source)
  .then(source => dispatch(receiveSource(source)));

export const updateSource = (source) => dispatch => SourceAPIUtil.updateSource(source)
  .then(source => dispatch(receiveSource(source)));

export const destroySource = (id) => dispatch => SourceAPIUtil.destroySource(id)
  .then(source => dispatch(receiveSource(source)));

