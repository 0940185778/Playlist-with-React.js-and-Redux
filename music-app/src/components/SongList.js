import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongsRequest, updateSongRequest, deleteSongRequest, addSongRequest } from '../redux/songsSlice';
import SongForm from './SongForm';
import DeleteSong from './DeleteSong';
import { SongListContainer, SongListItem, EditButton} from '../styles/styledComponents';

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs.list);
  const loading = useSelector(state => state.songs.loading);
  const error = useSelector(state => state.songs.error);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const handleUpdate = song => {
    dispatch(updateSongRequest(song));
    setEditing(null);
  };

  const handleDelete = song => {
    dispatch(deleteSongRequest(song.id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    
    <SongListContainer>
       <SongListItem>
      <SongForm onSubmit={song => dispatch(addSongRequest(song))} />
    </SongListItem >
    {songs.map(song => (
      <SongListItem key={song.id}>
        {editing === song.id ? (
          <SongForm song={song} onSubmit={handleUpdate} />
        ) : (
          <>
            {song.title}
            <EditButton onClick={() => setEditing(song.id)}>Edit</EditButton>
            <DeleteSong song={song} onDelete={handleDelete} />
          </>
        )}
      </SongListItem>
    ))}
  </SongListContainer>
  );
};

export default SongList;