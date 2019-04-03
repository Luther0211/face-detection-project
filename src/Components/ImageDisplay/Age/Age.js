import React from "react"

import "./Age.css"

export default ({age, percentage}) => {
    return(
        <div className="data-bar">
            <span className="data">{age} years old</span>
            <span className="data">{Math.ceil(percentage * 100)}%</span>
        </div>
    )
}