import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <Route path="/about" component={()=> <span>123</span>} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
