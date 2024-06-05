// src/redux/songsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'songs',
  initialState: { list: [], loading: false, error: null },
  reducers: {
    fetchSongsRequest: state => { state.loading = true; },
    fetchSongsSuccess: (state, action) => { state.loading = false; state.list = action.payload; },
    fetchSongsFailure: (state, action) => { state.loading = false; state.error = action.payload; },
    addSongRequest: (state, action) => { state.loading = true; },
    addSongSuccess: (state, action) => { state.loading = false; state.list.push(action.payload); },
    addSongFailure: (state, action) => { state.loading = false; state.error = action.payload; },
    updateSongRequest: (state, action) => { state.loading = true; },
    updateSongSuccess: (state, action) => {
      state.loading = false;
      const index = state.list.findIndex(song => song.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    updateSongFailure: (state, action) => { state.loading = false; state.error = action.payload; },
    deleteSongRequest: (state, action) => { state.loading = true; },
    deleteSongSuccess: (state, action) => {
      state.loading = false;
      state.list = state.list.filter(song => song.id !== action.payload);
    },
    deleteSongFailure: (state, action) => { state.loading = false; state.error = action.payload; },
  },
});

export const {
  fetchSongsRequest, fetchSongsSuccess, fetchSongsFailure,
  addSongRequest, addSongSuccess, addSongFailure,
  updateSongRequest, updateSongSuccess, updateSongFailure,
  deleteSongRequest, deleteSongSuccess, deleteSongFailure,
} = songsSlice.actions;
export default songsSlice.reducer;