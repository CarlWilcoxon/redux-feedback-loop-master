import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

  state = {
    support:''
  }

  componentDidMount() {
    //do stuff on start.
  }

  handleChange = ( event, propertyName ) => {
    console.log( `In handleChange: propertyName=${propertyName}
                  event=`, event.target.value );
    this.setState( {
        ...this.state,
        [propertyName]: event.target.value
    } );
  }

  submitFeedback = () => {
    // send the value to the reducer
    this.props.dispatch( { type: 'SET_SUPPORT', payload: this.state.support } )
    this.setState({
      support: ''
    })

    // Go to next page
    this.props.history.push('/comment');
  }


  render() {
    return (
      <>
      <form>
        <div className="form-group">
          <label>How are you feeling today?</label>
          {/* The onChange here uses an anonymous function that calls another function
              - this is currying*/}
          <input type="number"
                  value={ this.state.support }
                  onChange={ event => this.handleChange(event, 'support') } />
        </div>
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
