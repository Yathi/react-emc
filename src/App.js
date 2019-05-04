import React from 'react';
import {
 BrowserRouter as Router, Route, Switch, Link 
} from 'react-router-dom';
import './App.scss';
import * as ROUTES from './constants/routes';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import Navigation from './components/Navigation';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import { withAuthentication } from './components/Session';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">Edmonton Movie Club</Link>
      </header>
      <Navigation />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default withAuthentication(App);
