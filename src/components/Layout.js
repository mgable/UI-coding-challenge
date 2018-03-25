import React from 'react';
import Name from './Name.js';
import Row from './Row.js';
import logo from '../logo.svg';
import spinner from '../2.gif';
import './Layout.css'
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';

const Layout = ({items, data, total, onChoiceClick, selected, waiting}) => {
  var spinner = null;
  if (waiting){
    spinner = <div className="spinner-holder"><FontAwesome className='spinner' name='spinner' size='5x' spin style={{ color: 'white' }}/></div>
  }

  return (
      <div className="App">
      {spinner}
        <div className={(waiting ? 'waiting' : '')}></div>
        <header className="App-header">
          <h1 className="App-title">Favorite Fruits</h1>
          <h5>Sponsored by React</h5><img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="chart-holder">
          <table className="table">
            <tbody>
              {items.map((item, idx) => {
                var style = {
                  width: (item.count * 100) / total + "%",
                  backgroundColor: item.bgcolor
                };
                return <Row onClick={() => onChoiceClick(item, idx, selected)} key={idx} idx={idx} item={item} style={style}></Row>
              })}
            </tbody>
          </table>
        </div>
        <ul className="name-holder">
          {data.map((item, idx) => {
            return <Name key={idx} item={item}></Name>
          })}
        </ul>
      </div>
    );
}
 
 
export default Layout
