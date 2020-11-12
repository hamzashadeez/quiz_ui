import React from 'react';
import './App.css';
import { Main } from './Components/Main/Main';
import SideMenu from './Components/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Main />
    </div>
  );
}

export default App;
