import thunkMiddleware from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { fetchPosts } from './actions'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './poly.js'

let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
)

store
  .dispatch(fetchPosts())
  .then(() => {console.log(store.getState())})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	 document.getElementById('root')
);
registerServiceWorker();