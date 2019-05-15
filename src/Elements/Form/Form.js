import React from 'react'
import {Link} from "react-router-dom";
import InputForm from './InputForm/InputForm';
import { Button } from "@material-ui/core";

import "./Form.css"



export default props => {
    return (
        <div className="top-section">
            <Button className="submit-btn" variant="contained" color="primary" type='submit'>
                <Link to="/" className="Link">HOME</Link>
            </Button>
            <h1 className="top-title">{props.title}</h1>
            <InputForm onInputSubmit={props.onInputSubmit} />
        </div>
    )
}