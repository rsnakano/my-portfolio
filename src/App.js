import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Main from './Main.js';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Toolbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
