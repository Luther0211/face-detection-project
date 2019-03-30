import React from 'react'
import "./ImageDisplay.css"

export default props => <img className="ImageDisplay" src={props.imageUrl} alt={props.imageUrl} />