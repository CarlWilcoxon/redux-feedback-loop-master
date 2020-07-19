import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

  // Setup the button handler
  submitFeedbackToServer = (event) => {
    event.preventDefault();
    // send the value to the reducer
    this.props.dispatch( { type: 'SUBMIT_TO_SERVER', payload: this.props.reduxState.setFeedback } )

    // Go to next page
    this.props.history.push('/home');
  }

  confirmationDialog = (event) => {
    // Go to next page
    this.props.history.push('/home');
  }

  render() {
    return (
      <>
      <p>{JSON.stringify(this.props.reduxState.setFeedback)}</p>

      <button onClick={ this.submitFeedback }>Submit</button>

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
