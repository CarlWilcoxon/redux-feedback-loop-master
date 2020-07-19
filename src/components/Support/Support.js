import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {


  // Initialize the state
  state = {
    support: 1,
  }

  // Setup the radio button handler
  onRadioChange = (event, propertyName) =>{
    console.log( 'new value', event.target.value );

    this.setState({
      support: event.target.value
    })
  }

  // Setup the button handler
  submitFeedback = (event) => {
    event.preventDefault();
    // send the value to the reducer
    this.props.dispatch( { type: 'SET_SUPPORT', payload: this.state.support } )

    // Go to next page
    this.props.history.push('/comment');
  }


  render() {
    return (
      <>
      <form className="form-group">
        <label>How well are you being supported?</label>

        {/* I made a div because I wanted the radio buttons on their own line */}
        <p>
          1 <input onChange={event => this.onRadioChange(event, this.name) }
          defaultChecked={true} type="radio" value={1} name="support" />

          <input onChange={event => this.onRadioChange(event, this.name) }
          type="radio" value={2} name="support" />

          <input onChange={event => this.onRadioChange(event, this.name) }
          type="radio" value={3} name="support" />

          <input onChange={event => this.onRadioChange(event, this.name) }
          type="radio" value={4} name="support" />

          <input onChange={event => this.onRadioChange(event, this.name) }
          type="radio" value={5} name="support" />

          <input onChange={event => this.onRadioChange(event, this.name) }
          type="radio" value={6} name="support" /> 6
        </p>
          <button onClick={ () => this.props.history.push('/understand') }>Back</button>
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
export default connect(putReduxStateOnProps)(Support);
