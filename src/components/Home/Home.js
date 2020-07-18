import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

 nextPage = () => {
    // Go to start feedback
    this.props.history.push('/feels');
  }


  render() {
    return (
      <>
        <button onClick={ this.nextPage }>Feedback</button>
      </>
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
export default connect(putReduxStateOnProps)(Home);
