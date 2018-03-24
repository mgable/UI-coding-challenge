import React  from 'react';
import './Name.css';

function Name(props) {
 	return <li className="person"><span className="left-float">{props.item.name}</span><span className="right-float">{props.item.favoriteFruit}</span></li>
}

export default Name