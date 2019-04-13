import React from 'react'
import "./Results.css"
//COMPONENTS
import Data from "./Data/Data"

export default ({imageUrl, boxes, onFaceBoxClick, activeFaceData }) => {
    let age_appearance = null
    let gender_appearance = null
    let multicultural_appearance = null
     
    let boxResults = boxes.map(box => {
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
            ? <Data dataName={age.name + " years old"} percentage={age.value} key={i} index={i} /> 
            : null    
        )
        age_appearance.unshift(<div className="data-instr" key="data-instr-age"> <span className="appearance">Age Appearance</span> <span className="probability">Probability %</span> </div>)
        age_appearance.unshift(<h2 key="agekey" className="data-title">Age</h2>)

        //GENDER
        gender_appearance = activeFaceData.gender_appearance.concepts.map((gender, i) => {
            return <Data dataName={gender.name} percentage={gender.value} key={i} index={i} />
        })
        gender_appearance.unshift(<div className="data-instr" key="data-instr-gender"> <span className="appearance">Gender Appearance</span> <span className="probability">Probability %</span> </div>)
        gender_appearance.unshift(<h2 key="genderkey" className="data-title">Gender</h2>)

        //multicultural Appearance
        multicultural_appearance = activeFaceData.multicultural_appearance.concepts.map((culturalAp, i) => {
            return <Data dataName={culturalAp.name} percentage={culturalAp.value} index={i} key={i} />
        })
        multicultural_appearance.unshift(<div className="data-instr" key="data-instr-cultural"> <span className="appearance">Multicultural Appearance</span> <span className="probability">Probability %</span> </div>)
        multicultural_appearance.unshift(<h2 key="culturalkey" className="data-title">Multicultural Appearance</h2>)
    }

    return (
        <div className="results">
            
            <div className="result result-image">

                <div className="image-div">
                    <img id="DemographicsResults" src={imageUrl} alt="" />
                    {boxResults}
                </div>
               
            </div>

            <div className="result result-data">
                {age_appearance}
                {gender_appearance}
                {multicultural_appearance}
            </div>

        </div>
    )
}