import { combineReducers } from 'redux'
import { GET_DATA, RECEIVE_POSTS, SELECT_FRUIT } from './actions'
import _ from 'underscore'
import './FruitasticApi.js'

 
const initialState = {"data": [], "total": 0, "items": [], "response" :[], "selected": null, "waiting": null};
 
function app(state = initialState, action) {
	switch(action.type){
		case GET_DATA: return startWait(state, action)
		case SELECT_FRUIT: return filterItems(state, action)
		case RECEIVE_POSTS : return parseData(state, action)
		default: return state
	}  
}

function startWait(state, action){
	let waiting = true;
	return _.extend({...state, waiting});
}

function parseData(state, action){
	let groups = getGroups(action.data.response),
		response = action.data.response,
		data = action.data.response,
    	items = parseGroups(groups),
    	total = getTotal(groups),
    	waiting = false;
	return _.extend({...state, response, response, data, items, total, waiting});
}


function filterItems(state, action){
	let selected = state.selected === action.fruit.name ? null : action.fruit.name,
		data = _filter(state, selected, action.fruit.name);
	return _.extend({...state, selected, data});
}

function _filter(state, selected, which){
	if (selected === which){
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