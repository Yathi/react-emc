import React, { Component } from 'react';
import {
 BrowserRouter as Router, Route, Switch, Link 
} from 'react-router-dom';
import './App.css';
import * as ROUTES from './constants/routes';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import Navigation from './components/Navigation';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import { withFirebase } from './components/Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">Edmonton Movie Club</Link>
          </header>
          <Navigation authUser={this.state.authUser} />
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path="/movie/:id" component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
