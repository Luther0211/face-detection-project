import React from 'react';
import { TextField, Button } from "@material-ui/core";

import "./InputForm.css"

export default props => {
    return (
        <form className="form" onSubmit={props.onInputSubmit} >
            <TextField className="url-TextField" label="Image url" placeholder="Paste an image url!" variant="outlined" InputLabelProps={{ shrink: true}} />
            <Button className="submit-btn" variant="contained" color="primary" type='submit'>Detect</Button>
        </form>
    )
}