import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import MoviesList from './MoviesList';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        Edmonton Movie Club
      </header>
      <Switch>
        <Route path="/" component={MoviesList} />
      </Switch>
    </div>
  </Router>
);

export default App;
