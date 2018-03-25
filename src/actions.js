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
    //dispatch(getData()) 
    return fetchData()
      .then(
        response => response,
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receivePosts(json))
      )
  }
}

function fetchData(){
	return new Promise((resolve, reject) => {
		window.FruitasticApi.get((response) => {
			resolve({response});
		});
	});
}

