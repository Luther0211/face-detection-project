import React from 'react'
import "./Results.css"

export default (props) => {
    return (
        <div className="results">
            
            <div className="result result-image">

                <div className="image-div">
                    <img id="DemographicsResults" src={props.imageUrl} alt="" />
                    {props.boxes}
                </div>
               
            </div>

            <div className="result result-data" style={{height: `${props.fixedHeight}`}}>
                {props.DemographicsData}
                {props.ColorsData}
            </div>

        </div>
    )
}