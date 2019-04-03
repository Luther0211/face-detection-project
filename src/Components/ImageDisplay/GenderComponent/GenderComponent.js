import React from 'react'

export default ({gender, percentage, index}) => {
    switch(true) {
        case index % 2 === 0:
            return(
                <div className="data-bar odd">
                    <span className="data">{gender}</span>
                    <span className="data">{Math.round(percentage * 100)}%</span>
                </div>
            )

        default:
            return(
                <div className="data-bar">
                    <span className="data">{gender}</span>
                    <span className="data">{Math.round(percentage * 100)}%</span>
                </div>
            ) 
    }
}