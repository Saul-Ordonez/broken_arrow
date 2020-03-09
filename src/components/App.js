import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import constants from './../constants';
const { c } = constants;

function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={Landing} />
    </Switch>
    </div>
  );
}

export default App;
