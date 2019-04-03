import React from 'react'
import "./ImageDisplay.css"
import AgeComponent from './Age/Age'

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
        age = activeFaceData.age_appearance.concepts.map((concept, i) => {
            if(i < 5) return <AgeComponent age={concept.name} percentage={concept.value} key={i}/>
        })
        age.unshift(<h2 key="agekey">Age</h2>)
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