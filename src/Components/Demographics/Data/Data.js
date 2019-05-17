import React from 'react'
import "./Data.css"

export default ({dataName, percentage, index}) => {
    switch(true) {
        case index % 2 === 0:
            return(
                <div className="data-bar odd">
                    <span className="data-tag data-name">{dataName}</span>
                    <span className="data-tag data-value">{Math.ceil(percentage * 100)}%</span>
                </div>
            )

        default:
            return(
                <div className="data-bar even">
                    <span className="data-tag data-name">{dataName}</span>
                    <span className="data-tag data-value">{Math.round(percentage * 100)}%</span>
                </div>
            ) 
    }
}