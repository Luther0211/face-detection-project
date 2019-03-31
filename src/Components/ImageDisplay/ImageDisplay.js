import React from 'react'
import "./ImageDisplay.css"

export default ({imageUrl, box }) => {
    let boxSize = {
        top: box.topRow + '%', 
        right: box.rightCol + '%', 
        bottom: box.bottomRow + '%', 
        left: box.leftCol + '%'
    }

    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="ImageDisplay" alt="" src={imageUrl} width='500px' height='auto' />
                <div className="bounding-box" style={boxSize}></div>
            </div>
        </div>
    )
}