import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';

import Home from '../Home/Home.js';
import Feels from '../Feels/Feels.js';
import Understand from '../Understand/Understand.js';
import Support from '../Support/Support.js';
import Comment from '../Comment/Comment.js';
import Review from '../Review/Review.js';


class App extends Component {

  submitToServer = (feedback) =>{
    axios.post('/feedback', {data: feedback} )
    .then( (response) => {
      alert('Feedback sucessfully received!');
      this.props.history.push('/home');
    })
    .catch( (err) => {
      alert('An error has occured, please try again!');
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>
            Feedback
          </h1>
          <h2>
            <i>Don't forget it.</i>
          </h2>
        </nav>
        <Router>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/feels" component={Feels} />
            <Route path="/understand" component={Understand} />
            <Route path="/support" component={Support} />
            <Route path="/comment" component={Comment} />
            <Route path="/review" submitToServer={this.submitToServer} component={Review} />
          </main>
        </Router>
      </div>
    );
  }
}

// This function says what to put on Componet props
const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

// connect() will make the connection between the redux store & our Component
// connect gives us `dispatch`, this.props.dispatch( action )
// to see redux state, send function to connect
export default connect(putReduxStateOnProps)(App);
