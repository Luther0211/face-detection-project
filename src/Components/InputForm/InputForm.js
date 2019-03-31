import React from 'react'
import "./InputForm.css"

export default props => {
    return (
        <form className="form" onSubmit={props.onInputSubmit} >

            <div className="input" >Paste an image url <input type="url"  placeholder="Paste an Image url"/></div>
            <div className="input" >or</div>
            <div className="input" >Select a local image <input type="file" /></div>
            <div className="input" ><input type="submit" value="Detect" /></div>

        </form>
    )
}