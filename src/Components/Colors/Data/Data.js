import React from 'react';
import './Data.css'


export default (props) => {
    return (
        <div className="color-bar" style={props.style}>
            <span className="color-data">Name: {props.name}</span>
            <span className="color-data">Hex value: {props.hex}</span>
            <span className="color-data">Percentage: {props.colorValue}%</span>
        </div>
    )
}