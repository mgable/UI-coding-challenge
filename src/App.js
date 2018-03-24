import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  './FruitasticApi.js';
import _ from 'underscore';
import './poly.js'
import Name from './components/Name.js'
import Row from './components/Row.js'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {"data": [], "groups": {}, "total": 0, "items": [], "response" :[]}
	}

	componentDidMount() {
		let data, groups, total, items;
		window.FruitasticApi.get((response) => {
			data = response;
			groups = _.groupBy(response, (item) => { return item.favoriteFruit})
			total = _.reduce(_.values(groups), (acc, i) => {return acc + i.length}, 0);
			items = this.parseGroups(groups)
			this.setState({data, groups, total, items, response});
		});
	}

	parseGroups(groupsObj){
		var results = [];
		for (let prop in groupsObj){
			results.push({name: prop, count: groupsObj[prop].length, bgcolor: this.generateColor()})
		}
		return (_.sortBy(results, (item) => {return item.count})).reverse();
	}

	selectFruit(item, rowIdx){
		var row = document.getElementById('tr-' + rowIdx),
			allRows = document.getElementsByClassName('table-row');

		for(let row of allRows){
			row.className = "table-row";
		}
		row.className += " active";
		this.filter(item);

    	console.log(`Fruit selected: ${item.name}, ${item.count}`);
	}

	filter(which){
		var data = _.filter(this.state.response, (item)=> {return item.favoriteFruit === which.name});
		this.setState({data});
	}

	generateColor(){
		var letters = '0123456789ABCDEF',
			color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Favorite Fruits</h1>
					<h5>Sponsored by React</h5><img src={logo} className="App-logo" alt="logo" />
				</header>
				<div className="chart-holder">
					<table className="table">
						<tbody>
							{this.state.items.map((item, idx) => {
								var style = {
									width: (item.count * 100) / this.state.total + "%",
									backgroundColor: item.bgcolor
								};
								return <Row onClick={this.selectFruit.bind(this)} key={idx} idx={idx} item={item} style={style}></Row>
							})}
						</tbody>
					</table>
				</div>
				<ul className="name-holder">
					{this.state.data.map((item, idx) => {
						return <Name key={idx} item={item}></Name>
					})}
				</ul>
			</div>
		);
	}
}

export default App;
