import { useState, useEffect } from 'react';
import './App.css';
import MyButton from './components/MyButton';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
