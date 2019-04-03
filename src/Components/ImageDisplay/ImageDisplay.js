import React, {Fragment} from 'react'
import "./ImageDisplay.css"

export default ({imageUrl, boxes, onFaceBoxClick, activeFaceData }) => {
    let results = boxes.map(box => {
        let boxSize = {
            top: box.top, 
            right: box.right, 
            bottom: box.bottom, 
            left: box.left
        }
        return <div className="bounding-box" id={box.id} key={box.id} title={box.id} style={boxSize} onClick={onFaceBoxClick}></div>
    })

    let age = null

    if(activeFaceData !== null) {
        console.log(activeFaceData.age_appearance.concepts[0])
        age = (
            <Fragment>
                <h1>Age</h1>
                <div className="data-bar">
                    <span className="data">{activeFaceData.age_appearance.concepts[0].name} years old</span>
                    <span className="data">{Math.ceil(activeFaceData.age_appearance.concepts[0].value * 100)}%</span>
                </div>
            </Fragment>
        )
    }

    return (
        <div className="center">
            <div className="main">

                <div className="one">
                    <div className="absolute">
                        <img id="ImageDisplay" src={imageUrl} alt="" />
                        {results}
                    </div>
                </div>

                <div className="two">
                    {age}
                </div>

            </div>
        </div>
    )
}