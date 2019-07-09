
import * as SourceAPIUtil from "../util/source_util";

export const RECEIVE_SOURCES = "RECEIVE_SOURCES";
export const RECEIVE_SOURCE = "RECEIVE_SOURCE";
export const REMOVE_SOURCE = "REMOVE_SOURCE";

const receiveSources = sources => ({
  type: RECEIVE_SOURCE,
  sources
});

const receiveSource = source => ({
  type: RECEIVE_SOURCE,
  source
});

const removeSource = source => ({
  type: REMOVE_SOURCE,
  source
});


export const fetchSources = (id) => dispatch => SourceAPIUtil.fetchSources(id)
  .then(source => dispatch(receiveSources(source)));

  export const fetchSource = (id) => dispatch => SourceAPIUtil.fetchSource(id)
  .then(source => dispatch(receiveSource(source)));

export const createSource = (source) => dispatch => SourceAPIUtil.createSource(source)
  .then(source => dispatch(receiveSource(source)));

export const updateSource = (source) => dispatch => SourceAPIUtil.updateSource(source)
  .then(source => dispatch(receiveSource(source)));

export const destroySource = (id) => dispatch => SourceAPIUtil.destroySource(id)
  .then(source => dispatch(receiveSource(source)));

