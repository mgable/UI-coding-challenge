import { connect } from 'react-redux'
import { selectFruit } from '../actions'
import Layout from '../components/Layout.js'
import _ from 'underscore'


function getItems(state){
	return state.app.items;
}

function getData(state){
	return state.app.data;
}

function getTotal(state){
	return state.app.total;
}

function getSelected(state){
	return state.app.selected;
}

function toggleRow(item, rowIdx, selected){
	//look mom, no jQuery!
	var row = document.getElementById('tr-' + rowIdx),
		allRows = document.getElementsByClassName('table-row');

	for(let row of allRows){
		row.className = "table-row";
	}

	if (item.name !== selected){
		row.className += " active";
	}
}


const mapStateToProps = state => {
	return {
		data: getData(state),
		items: getItems(state),
		total: getTotal(state),
		selected: getSelected(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onChoiceClick: (item, rowIdx, selected) => {
			toggleRow(item, rowIdx, selected)
			dispatch(selectFruit(item));
		}
	}
}

/*
data = response;
//  //    groups = _.groupBy(response, (item) => { return item.favoriteFruit})
//  //    total = _.reduce(_.values(groups), (acc, i) => {return acc + i.length}, 0);
//  //    items = this.parseGroups(groups)
//  //    this.setState({data, total, items, response});
*/

/*
const mapStateToProps = state => {
  return {
	choices: getChoices(state.quiz.questions[state.quiz.currentQuestion].choiceList),
	image: getImage(state.quiz.questions[state.quiz.currentQuestion].image),
	response: getResponse(state.quiz.questions[state.quiz.currentQuestion].response),
	currentQuestion: getResponse(state.quiz.currentQuestion),
	currentSelection: getResponse(state.quiz.currentSelection),
  }
}

*/

function getSelectedFruit(state){
	return state;
}



const Fruit = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Layout)

	export default Fruit