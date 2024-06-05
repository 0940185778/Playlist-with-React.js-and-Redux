// src/App.js
import React from 'react';
import SongList from './components/SongList';
import { AppContainer, Title } from './styles/styledComponents';

const App = () => {
  return (
    <AppContainer>
      <div><Title>Songs</Title></div>
      
      <div><SongList /></div>
    </AppContainer>
  );
};

export default App;