import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const App = ():JSX.Element => {
  return (
    <div className="App">
      <BurgerMenu />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
