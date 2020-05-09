import React from 'react';
import SongList from './components/SongList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';
import SongContextProvider from './context/SongContext';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <SongContextProvider>
          <Navbar />
          <SongList />
        </SongContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
