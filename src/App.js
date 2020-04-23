import React from 'react';
import './App.css';
import Name from './components/Name';
import Count from './components/Count';
function App() {
  return (
    <div className="App">
        <Name name='Taylor'/>
        <Count/>
    </div>
  );
}

export default App;
