import React from 'react'
import {Link} from "react-router-dom";
import InputForm from './InputForm/InputForm';
import "./Form.css"



export default props => {
    return (
        <div className="top-section">
            <Link to="/">HOME</Link>
            <h1 className="top-title">{props.title}</h1>
            <InputForm onInputSubmit={props.onInputSubmit} />
        </div>
    )
}