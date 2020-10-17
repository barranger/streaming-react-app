import React from 'react';
import Home from './pages/Home';
import Category from './pages/Category';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

const App = () => {

  return (
  <Router basename="streaming-react-app">
    <Switch>
      <Route path="/category/:catId">
        <Category />
      </Route>
      <Route>
        <Home />
      </Route>
    </Switch>
  </Router>)
}

export default App;
