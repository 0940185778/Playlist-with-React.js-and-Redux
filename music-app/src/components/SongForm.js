// src/components/SongForm.js
import React, { useState } from 'react';

const SongForm = ({ song, onSubmit }) => {
  const [title, setTitle] = useState(song ? song.title : '');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ id: song ? song.id : undefined, title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
      <button type="submit">{song ? 'Update' : 'Add'} Song</button>
    </form>
  );
};

export default SongForm;