import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import UserPage from './components/UserPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">User Page</Link>
            </li>
          </ul>
        </nav>
        <hr></hr>
        <Switch>
          <Route path="/" exact component={() => <h1>Home Page</h1>} />
          <Route path="/about" component={AboutPage} />
          <Route path="/user" exact component={UserPage} />
          <Route path="/user/:userid" component={({ match }) => {
            return <h1> hello user {match.params.userid}</h1>
          }} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
