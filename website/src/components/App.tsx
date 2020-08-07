import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function App():JSX.Element {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <BurgerMenu />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
