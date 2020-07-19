import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

  render() {
    return (
      <>
      <p>{JSON.stringify(this.props.reduxState.setFeedback)}</p>

      <button onClick={ () => this.props.submitToServer(this.props.reduxState.setFeedback) }>Submit</button>

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
export default connect(putReduxStateOnProps)(Review);
