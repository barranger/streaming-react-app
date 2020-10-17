import React from 'react';
import Home from './pages/Home';
import Category from './pages/Category';
import Recipe from './pages/Recipe';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

const App = () => {

  return (
  <Router basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
      <Route path="/category/:catId">
        <Category />
      </Route>
      <Route path="/recipe/:mealId">
        <Recipe />
      </Route>
      <Route>
        <Home />
      </Route>
    </Switch>
  </Router>)
}

export default App;
