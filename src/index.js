import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const setFeedback = (state={}, action) => {
  // Set whatever attribute to the payload value
  if ( action.type === 'SET_FEELS' ) {

    console.log('Setting feels', action);
    return { ...state, feels: action.payload };

  } else if ( action.type === 'SET_UNDERSTAND' ) {

    console.log('Setting understand', action);
    return { ...state, understand: action.payload };

  } else if ( action.type === 'SET_SUPPORT' ) {

    console.log('Setting support', action);
    return { ...state, support: action.payload };

  } else if ( action.type === 'SET_COMMENT' ) {

    console.log('Setting comment', action);
    return { ...state, comment: action.payload };
  }
  return state;
}

// I think this will get the state from setFeedback and return it
const getFeedback = (state, action) => {
  return setFeedback;
}


// Create the Redux store - place to keep our shared data
// All reducers run each time an action is dispatched
const storeInstance = createStore(
  combineReducers( {
    setFeedback,
    getFeedback,
  } ),
  applyMiddleware( logger )
)

// Use the Provider to share the Redux store with the App
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));

    registerServiceWorker();
