import _ from 'underscore'

/*
 * action types
 */

export const GET_DATA = 'GET_DATA'
export const SELECT_FRUIT = 'SELECT_FRUIT'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const initialState = {"data": [], "total": 0, "items": [], "response" :[], "selected": null};

/*
 * action creators
 */

export function getData() {
  return { type: GET_DATA }
}

export function selectFruit(fruit) {
  return { type: SELECT_FRUIT, fruit }
}

export function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    data: json //json.data.children.map(child => child.data),
  }
}

export function fetchPosts() { 
  return function (dispatch) { 
    dispatch(getData()) 
    return fetchData()
      .then(
        response => response,
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
 
        dispatch(receivePosts(json))
      )
  }
}

function fetchData(state = initialState, action){
	return new Promise((resolve, reject) => {
		var data, groups, total, items;
		window.FruitasticApi.get((response) => {
			console.info("I got a response");
			resolve({response});
		});
	});
}

