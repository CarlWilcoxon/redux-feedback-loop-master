import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feels extends Component {


  // Initialize the state
  state = {
    feels: 1
  }

  // Setup the radio button handler
  onRadioChange = (event, propertyName) =>{
    console.log( 'new value', event.target.value );
    if (event.target.value === 1 ||
      event.target.value === 2 ||
      event.target.value === 3 ||
      event.target.value === 4 ||
      event.target.value === 5 ||
      event.target.value === 6) {
      this.setState({
        ...this.state,
        [propertyName]: event.target.value
      })
    }
  }

  // Setup the button handler
  submitFeedback = () => {
    // send the value to the reducer
    this.props.dispatch( { type: 'SET_FEELS', payload: this.state.feels } )

    // Go to next page
    this.props.history.push('/understand');
  }


  render() {
    return (
      <>
      <form className="form-group" onChange={event => this.onRadioChange(event, 'feels') }>
        <label>How are you feeling today?</label>

        {/* I made a div because I wanted the radio buttons on their own line */}
        <div className="radio-btns">
          1 <input defaultChecked type="radio" value="1" name="type" />
          <input type="radio" value="2" name="type" />
          <input type="radio" value="3" name="type" />
          <input type="radio" value="4" name="type" />
          <input type="radio" value="5" name="type" />
          <input type="radio" value="6" name="type" /> 6
        </div>

        <div>
          <button onClick={ this.submitFeedback }>Submit</button>
        </div>
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
export default connect(putReduxStateOnProps)(Feels);
