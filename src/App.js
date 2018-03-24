import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  './FruitasticApi.js';
import _ from 'underscore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {"data": [], "groups": {}, "total": 0, "items": [], "selectedRow": null}
  }

  componentDidMount() {
    let data, groups, total, items;
    window.FruitasticApi.get((response) => {
      data = response;
      groups = _.groupBy(response, (item) => { return item.favoriteFruit})
      total = _.reduce(_.values(groups), (acc, i) => {return acc + i.length}, 0);
      items = this.parseGroups(groups)
      this.setState({data, groups, total, items});
    });
  }

  parseGroups(groupsObj){
    var results = [];
    for (let prop in groupsObj){
      results.push({name: prop, count: groupsObj[prop].length})
    }

    return results;
  }

  selectFruit(item, rowIdx){
    var row = document.getElementById('tr-' + rowIdx),
      allRows = document.getElementsByClassName('table-row');


console.info(allRows);

    for(let row of allRows){
      console.info(row);
     row.className = "table-row";
    }
    row.className += " active";

    

    console.info(row.className);
    console.log(`Fruit selected: ${item.name}, ${item.count}`);
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
              };
              return <tr key={idx} className="table-row" id={'tr-' + idx}><td><div onClick={() => {this.selectFruit(item, idx)}} className="name left-align">{item.name}</div></td><td className="row-holder"><div className="row-background"><div className="total" style={style}>&nbsp;</div></div></td><td>{item.count}</td></tr>
            })}
            </tbody>
          </table>
        </div>
        <ul className="name-holder">
          {this.state.data.map((item, idx) => {
            return <li className="person" key={idx}><span className="left-float">{item.name}</span><span className="right-float">{item.favoriteFruit}</span></li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
