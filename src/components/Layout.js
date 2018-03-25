import React from 'react';
import Name from './Name.js';
import Row from './Row.js';
import logo from '../logo.svg';

const Layout = ({items, data, total, onChoiceClick}) => {
  return (
      <div className="App">
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
                return <Row onClick={() => onChoiceClick(item)} key={idx} idx={idx} item={item} style={style}></Row>
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
