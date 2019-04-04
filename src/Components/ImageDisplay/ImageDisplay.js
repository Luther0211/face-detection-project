import React from 'react'
import "./ImageDisplay.css"
//COMPONENTS
import DataComponent from "./DataComponent/DataComponent"

export default ({imageUrl, boxes, onFaceBoxClick, activeFaceData }) => {
    let age_appearance = null
    let gender_appearance = null
    let multicultural_appearance = null
     
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


    if(activeFaceData !== null) { // COMBINE COMPONENTS!
        //AGE
        age_appearance = activeFaceData.age_appearance.concepts.map((age, i) => i < 5 
            ? <DataComponent dataName={age.name + " years old"} percentage={age.value} key={i} index={i} /> 
            : null    
        )
        age_appearance.unshift(<div className="data-instr" key="data-instr-age"> <span>Result</span> <span>Probability %</span> </div>)
        age_appearance.unshift(<h2 key="agekey" className="data-title">Age</h2>)

        //GENDER
        gender_appearance = activeFaceData.gender_appearance.concepts.map((gender, i) => {
            return <DataComponent dataName={gender.name} percentage={gender.value} key={i} index={i} />
        })
        gender_appearance.unshift(<div className="data-instr" key="data-instr-gender"> <span>Result</span> <span>Probability %</span> </div>)
        gender_appearance.unshift(<h2 key="genderkey" className="data-title">Gender</h2>)

        //multicultural Appearance
        multicultural_appearance = activeFaceData.multicultural_appearance.concepts.map((culturalAp, i) => {
            return <DataComponent dataName={culturalAp.name} percentage={culturalAp.value} index={i} key={i} />
        })
        multicultural_appearance.unshift(<div className="data-instr" key="data-instr-cultural"> <span>Result</span> <span>Probability %</span> </div>)
        multicultural_appearance.unshift(<h2 key="culturalkey" className="data-title">Multicultural Appearance</h2>)
    }

    return (
        <div className="center">
            <div className="main">

                <div className="one">
                    <div className="image-div">
                        <img id="ImageDisplay" src={imageUrl} alt="" />
                        {results}
                    </div>
                </div>

                <div className="two">
                    {age_appearance}
                    {gender_appearance}
                    {multicultural_appearance}
                </div>

            </div>
        </div>
    )
}