import React from 'react'
import "./ImageDisplay.css"

export default ({imageUrl, boxes }) => {
    let results = boxes.map(box => {
        let boxSize = {
            top: box.top, 
            right: box.right, 
            bottom: box.bottom, 
            left: box.left
        }
        console.log(box)
        return <div className="bounding-box" id={box.id} key={box.id} style={boxSize}></div>
    })

    return (
        <div className="center ma">
            <div className="absolute mt2" id="image-display-div">
                <img id="ImageDisplay" alt="" src={imageUrl} />
                {results}
            </div>
        </div>
    )
}