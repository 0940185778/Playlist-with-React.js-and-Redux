// src/components/DeleteSong.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSongRequest } from '../redux/songsSlice';

const DeleteSong = ({ song }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteSongRequest(song.id));
  };

  return <button onClick={handleClick}>Delete Song</button>;
};

export default DeleteSong;