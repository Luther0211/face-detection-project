import React from 'react'
import {TextField} from "@material-ui/core";
import "./InputForm.css"

export default props => {
    return (
        <form className="form" onSubmit={props.onInputSubmit} >
            <TextField
                className="TextField"
                label="Image url"
                placeholder="Paste an image url!"
                variant="outlined"
                InputLabelProps={{ shrink: true}}
            />
            <div className="input" ><input type="submit" value="Detect" /></div>
        </form>
    )
}