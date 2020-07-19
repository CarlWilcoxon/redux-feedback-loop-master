import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understand extends Component {


  // Initialize the state
  state = {
    understand: 1,
  }

  // Setup the radio button handler
  onRadioChange = (event, propertyName) =>{
    console.log( 'new value', event.target.value );

    this.setState({
      understand: event.target.value
    })
  }

  // Setup the button handler
  submitFeedback = (event) => {
    event.preventDefault();
    // send the value to the reducer
    this.props.dispatch( { type: 'SET_UNDERSTAND', payload: this.state.understand } )

    // Go to next page
    this.props.history.push('/support');
  }


  render() {
    return (
      <>
      <form className="form-group">
        <label>How well are you understanding the content?</label>

        {/* I made a div because I wanted the radio buttons on their own line */}
        <p>
          1 <input onChange={event => this.onRadioChange(event, this.name) }
          defaultChecked={true} type="radio" value={1} name="understand" />

          <input onChange={event => this.onRadioChange(event, this.name) }
          type="radio" value={2} name="understand" />

          <input onChange={event => this.onRadioChange(event, this.name) }
          type="radio" value={3} name="understand" />

          <input onChange={event => this.onRadioChange(event, this.name) }
          type="radio" value={4} name="understand" />

          <input onChange={event => this.onRadioChange(event, this.name) }
          type="radio" value={5} name="understand" />

          <input onChange={event => this.onRadioChange(event, this.name) }
          type="radio" value={6} name="understand" /> 6
        </p>
          <button onClick={ this.submitFeedback }>Submit</button>
      </form>
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
export default connect(putReduxStateOnProps)(Understand);
