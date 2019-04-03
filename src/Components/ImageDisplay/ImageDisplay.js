import React from 'react'
import "./ImageDisplay.css"
//COMPONENTS
import AgeComponent from './Age/AgeComponent'
import GenderComponent from "./GenderComponent/GenderComponent"

export default ({imageUrl, boxes, onFaceBoxClick, activeFaceData }) => {
    let age_appearance = null
    let gender_appearance = null
    // let multicultural_appearance = null
     
    console.log(activeFaceData)

    let results = boxes.map(box => {
        let boxSize = {
            top: box.top, 
            right: box.right, 
            bottom: box.bottom, 
            left: box.left
        }
        return <div className="bounding-box" id={box.id} key={box.id} title={box.id} style={boxSize} onClick={onFaceBoxClick}></div>
    })


    if(activeFaceData !== null) {
        //AGE
        age_appearance = activeFaceData.age_appearance.concepts.map((ageConcept, i) => {
            if(i < 5) return <AgeComponent age={ageConcept.name} percentage={ageConcept.value} key={i} index={i} />
        })
        age_appearance.unshift(<h2 key="agekey" className="data-title">Age</h2>)

        //GENDER
        gender_appearance = activeFaceData.gender_appearance.concepts.map((genderConcept, i) => {
            return <GenderComponent gender={genderConcept.name} percentage={genderConcept.value} key={i} index={i} />
        })
        gender_appearance.unshift(<h2 key="genderkey" className="data-title">Gender</h2>)
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
                    {age_appearance}
                    {gender_appearance}
                </div>

            </div>
        </div>
    )
}