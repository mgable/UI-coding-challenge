// import React, { Component } from 'react';
// import './App.css';
// import  './FruitasticApi.js';
// import _ from 'underscore';
// import Name from './components/Name.js'
// import Row from './components/Row.js'

// class App extends Component {
// 	// data (collection) are the displayed {name} : {favoriteFruit} pairs
// 	// total (number) is the total number of fruit for the charting 
// 	// items (collection) are the displayed {name} {count} {bgcolor} for charting
// 	// response (collection) is the raw response from FruitasticApi.js needed to refresh the names listing after filtering
// 	// selected (null | string) is the select fruit
// 	constructor(props) {
// 		super(props);
// 		this.state = {"data": [], "total": 0, "items": [], "response" :[], "selected": null}
// 	}

// 	// componentDidMount() {
// 	// 	var data, groups, total, items;
// 	// 	window.FruitasticApi.get((response) => {
// 	// 		data = response;
// 	// 		groups = _.groupBy(response, (item) => { return item.favoriteFruit})
// 	// 		total = _.reduce(_.values(groups), (acc, i) => {return acc + i.length}, 0);
// 	// 		items = this.parseGroups(groups)
// 	// 		this.setState({data, total, items, response});
// 	// 	});
// 	// }

// 	// click handler for chart row
// 	selectFruit(item, rowIdx){
// 		// look mom, no jQuery!
// 		var row = document.getElementById('tr-' + rowIdx),
// 			allRows = document.getElementsByClassName('table-row');

// 		for(let row of allRows){
// 			row.className = "table-row";
// 		}

// 		if (item.name !== this.state.selected){
// 			row.className += " active";
// 		}

// 		this.filter(item);

//     	console.log(`Fruit selected: ${item.name}, ${item.count}`);
// 	}

// 	filter(which){
// 		var data;
// 		if (this.state.selected !== which.name){
// 			data = _.filter(this.state.response, (item)=> {return item.favoriteFruit === which.name});
// 			this.setState({data, selected: which.name});
// 		} else {
// 			this.setState({data: this.state.response, selected: null});
// 		}
// 	}

// 	render() {
// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					<h1 className="App-title">Favorite Fruits</h1>
// 					<h5>Sponsored by React</h5><img src={logo} className="App-logo" alt="logo" />
// 				</header>
// 				<div className="chart-holder">
// 					<table className="table">
// 						<tbody>
// 							{this.state.items.map((item, idx) => {
// 								var style = {
// 									width: (item.count * 100) / this.state.total + "%",
// 									backgroundColor: item.bgcolor
// 								};
// 								return <Row onClick={this.selectFruit.bind(this)} key={idx} idx={idx} item={item} style={style}></Row>
// 							})}
// 						</tbody>
// 					</table>
// 				</div>
// 				<ul className="name-holder">
// 					{this.state.data.map((item, idx) => {
// 						return <Name key={idx} item={item}></Name>
// 					})}
// 				</ul>
// 			</div>
// 		);
// 	}
// }

//export default App;


import React, { Component } from 'react';
import './App.css';
import Fruit from './containers/Fruit.js'

class App extends Component {
  render() {
    return (
      <Fruit></Fruit>
    );
  }
}

export default App;