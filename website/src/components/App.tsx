import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';

function App() {
  let x = 4
  for (let i =0; i<3; i++) {
    let y = "dwa"
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
