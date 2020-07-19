import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

//import components to setup routes
import Home from '../Home/Home.js';
import Feels from '../Feels/Feels.js';
import Understand from '../Understand/Understand.js';
import Support from '../Support/Support.js';
import Comment from '../Comment/Comment.js';
import Review from '../Review/Review.js';


class App extends Component {



  render() {
    return (
      <div className="App">
        {/* Create a 'nav bar' without nav buttons to make the site look consistent */}
        <nav>
          <h1>
            Feedback
          </h1>
          <h2>
            <i>Don't forget it.</i>
          </h2>
        </nav>
        {/* setup a router with routes */}
        <Router>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/feels" component={Feels} />
            <Route path="/understand" component={Understand} />
            <Route path="/support" component={Support} />
            <Route path="/comment" component={Comment} />
            <Route path="/review" component={Review} />
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
