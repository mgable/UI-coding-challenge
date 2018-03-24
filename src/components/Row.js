import React  from 'react';
import './Row.css'

function Row(props) {
 	return <tr className="table-row" id={'tr-' + props.idx} onClick={() => {props.onClick(props.item, props.idx)}} ><td><div className="name left-align">{props.item.name}</div></td><td className="row-holder"><div className="row-background"><div className="total" style={props.style}>&nbsp;</div></div></td><td>{props.item.count}</td></tr>
}

export default Row