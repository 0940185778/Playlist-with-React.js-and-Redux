// src/App.js
import './App.css';
import React from 'react';
import SongList from './components/SongList';
import { AppContainer, Title } from './styles/styledComponents';

const App = () => {
  return (
    <AppContainer>
      <div className='song'><Title>Songs</Title></div>
      <SongList />
    </AppContainer>
  );
};

export default App;