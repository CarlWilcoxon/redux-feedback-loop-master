import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {

  state = {
    comment:''
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
    this.props.dispatch( { type: 'SET_COMMENT', payload: this.state.comment } )
    this.setState({
      comment: ''
    })

    // Go to next page
    this.props.history.push('/comment');
  }


  render() {
    return (
      <>
      <form>
        <div className="form-group">
          <label>Any comments you want to leave?</label>
          {/* The onChange here uses an anonymous function that calls another function
              - this is currying*/}
          <input type="text"
                  value={ this.state.comment }
                  onChange={ event => this.handleChange(event, 'comment') } />
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
export default connect(putReduxStateOnProps)(Comment);
