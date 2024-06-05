// src/redux/songsSaga.js
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  fetchSongsRequest, fetchSongsSuccess, fetchSongsFailure,
  addSongRequest, addSongSuccess, addSongFailure,
  updateSongRequest, updateSongSuccess, updateSongFailure,
  deleteSongRequest, deleteSongSuccess, deleteSongFailure,
} from './songsSlice';

function* fetchSongs() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts'); // Replace with your actual API
    const data = yield call([response, 'json']);
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    yield put(fetchSongsFailure(error.toString()));
  }
}

function* addSong(action) {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts', { // Replace with your actual API
      method: 'POST',
      body: JSON.stringify(action.payload),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = yield call([response, 'json']);
    yield put(addSongSuccess(data));
  } catch (error) {
    yield put(addSongFailure(error.toString()));
  }
}

function* updateSong(action) {
  try {
    const response = yield call(fetch, `https://jsonplaceholder.typicode.com/posts/${action.payload.id}`, { // Replace with your actual API
      method: 'PUT',
      body: JSON.stringify(action.payload),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = yield call([response, 'json']);
    yield put(updateSongSuccess(data));
  } catch (error) {
    yield put(updateSongFailure(error.toString()));
  }
}

function* deleteSong(action) {
  try {
    yield call(fetch, `https://jsonplaceholder.typicode.com/posts/${action.payload}`, { method: 'DELETE' }); // Replace with your actual API
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error.toString()));
  }
}

export function* songsSaga() {
  yield takeEvery(fetchSongsRequest.type, fetchSongs);
  yield takeEvery(addSongRequest.type, addSong);
  yield takeEvery(updateSongRequest.type, updateSong);
  yield takeEvery(deleteSongRequest.type, deleteSong);
}