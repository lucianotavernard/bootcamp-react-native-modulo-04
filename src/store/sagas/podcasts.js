import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import PodcastsActions from '~/store/ducks/podcasts';

export function* load(params) {
  try {
    const response = yield call(api.get, 'podcasts');

    yield put(PodcastsActions.loadSuccess(response.data));
  } catch (error) {
    yield put(PodcastsActions.loadFailure());
  }
}
