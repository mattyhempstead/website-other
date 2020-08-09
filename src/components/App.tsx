import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Home from '../pages/Home';
import About from '../pages/About';
import SingularityCountdown from '../pages/SingularityCountdown/SingularityCountdown';

const App = ():JSX.Element => {
  return (
    <div className="App">
      <BurgerMenu />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/singularity-countdown' component={SingularityCountdown} />
      </Switch>
    </div>
  );
};

export default App;
