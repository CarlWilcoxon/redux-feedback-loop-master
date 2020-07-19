import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

  state = this.props.reduxState.setFeedback;

  submitToServer = (feedback) =>{
    axios.post('/feedback', feedback )
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
      <>
      <p>{JSON.stringify(this.state)}</p>

      <button onClick={ () => this.props.history.push('/comment') }>Back</button>
      <button onClick={ () => this.submitToServer(this.state) }>Submit</button>

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
