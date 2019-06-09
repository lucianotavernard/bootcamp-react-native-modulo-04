import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types e Actions Creators
 */

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});

export const PodcastsTypes = Types;
export default Creators;

/**
 * Initial state
 */

const initialState = Immutable({
  data: [],
});

/**
 * Reducer
 */

export const reducer = createReducer(initialState, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
});
