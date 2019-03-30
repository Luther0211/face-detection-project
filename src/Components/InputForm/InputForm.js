import React from 'react'

export default props => {
    return (
        <form onSubmit={props.onInputSubmit} >
            <input type="text"  placeholder="Paste an Image URL!" onChange={props.onInputChange} />
            <input type="submit" value="Detect" />
        </form>
    )
}