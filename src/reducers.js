import { combineReducers } from 'redux'
import { GET_DATA, RECEIVE_POSTS, SELECT_FRUIT } from './actions'
import _ from 'underscore'
import './FruitasticApi.js'

 
const initialState = {"data": [], "total": 0, "items": [], "response" :[], "selected": null};
 
function app(state = initialState, action) {
	switch(action.type){
		case GET_DATA: return r(state, action)
		case SELECT_FRUIT: return q(state, action)
		case RECEIVE_POSTS : return p(state, action)
		default: return state
	}  
}

function r(state, action){
	return _.extend({}, state);
}

function p(state, action){
	let groups = getGroups(action.data.response);
	state.response = action.data.response;
	state.data = action.data.response;
    state.items = parseGroups(groups);
    state.total = getTotal(groups);
	return _.extend({}, state);
}


function q(state, action){
	console.info("q was called with");
	console.info(state, action);
	state.selected = state.selected === action.fruit.name ? null : action.fruit.name;
	state.data = _filter(state, action.fruit.name);
	return _.extend({}, state);
}

function _filter(state, which){
	var data;
	if (state.selected === which){
		return _.filter(state.response, (item)=> {return item.favoriteFruit === which});
	} else {
		return state.response;
	}
}

// make the items collection of [{name, count, bgcolor}]
function parseGroups(groupsObj){
  var results = [];
  for (let prop in groupsObj){
    results.push({name: prop, count: groupsObj[prop].length, bgcolor: generateColor()})
  }
  return (_.sortBy(results, (item) => {return item.count})).reverse();
}

function generateColor(){
    var letters = '0123456789ABCDEF',
      color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


function getTotal(groups){
  return _.reduce(_.values(groups), (acc, i) => {return acc + i.length}, 0);
}

function getGroups(response){
  if (response){
    return _.groupBy(response, (item) => { return item.favoriteFruit});
  } else {
    return {};
  }
}
 
const reducers = combineReducers({
	app
})
 
export default reducers