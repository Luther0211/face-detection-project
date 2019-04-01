import React from 'react'
import { TextField, Button } from "@material-ui/core";
import "./DemographicsForm.css"

export default props => {
    return (
        <div className="top-section">
            <h1 className="top-title">DEMOGRAPHICS RECOGNITION A.I.</h1>
            <form className="form" onSubmit={props.onInputSubmit} >
                <TextField className="url-TextField" label="Image url" placeholder="Paste an image url!" variant="outlined" InputLabelProps={{ shrink: true}} />
                <Button className="submit-btn" variant="contained" color="primary" type='submit'>Detect</Button>
            </form>
        </div>
    )
}