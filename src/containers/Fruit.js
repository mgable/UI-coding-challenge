import { connect } from 'react-redux'
import { selectFruit } from '../actions'
import Layout from '../components/Layout.js'

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

function getWaiting(state){
	return state.app.waiting;
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
		selected: getSelected(state),
		waiting: getWaiting(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onChoiceClick: (item, rowIdx, selected) => {
			console.log(`Fruit selected: ${item.name}, ${item.count}`);
			toggleRow(item, rowIdx, selected)
			dispatch(selectFruit(item));
		}
	}
}

const Fruit = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Layout)

	export default Fruit