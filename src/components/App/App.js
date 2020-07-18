import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';

import Home from '../Home/Home.js';
import Feels from '../Feels/Feels.js';
// import Understand from '../Understand/Understand.js';
// import Support from '../Support/Support.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1>
            Feedback
          </h1>
          <h2>
            Don't forget it.
          </h2>
        </nav>
        <Router>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/feels" component={Feels} />
            {/* <Route path="/understand" component={Understand} />
            <Route path="/support" component={Support} /> */}
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
