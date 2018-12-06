import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            </nav>
            <hr></hr>
            <Route path="/about" component={()=> <h2>about page</h2>} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
