import React  from 'react';

function Row(props) {
 	return <tr className="table-row" id={'tr-' + props.idx}><td><div onClick={() => {props.onClick(props.item, props.idx)}} className="name left-align">{props.item.name}</div></td><td className="row-holder"><div className="row-background"><div className="total" style={props.style}>&nbsp;</div></div></td><td>{props.item.count}</td></tr>
}

export default Row