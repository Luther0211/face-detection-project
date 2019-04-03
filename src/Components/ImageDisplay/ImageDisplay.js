import React from 'react'
import "./ImageDisplay.css"

export default ({imageUrl, boxes, onFaceBoxClick }) => {
    let results = boxes.map(box => {
        let boxSize = {
            top: box.top, 
            right: box.right, 
            bottom: box.bottom, 
            left: box.left
        }
        return <div className="bounding-box" id={box.id} key={box.id} title={box.id} style={boxSize} onClick={onFaceBoxClick}></div>
    })

    return (
        <div className="center">
            <div className="main">

                <div className="one">
                    <div className="absolute">
                        <img id="ImageDisplay" src={imageUrl} alt="" />
                        {results}
                    </div>
                </div>

                <div className="two"></div>

            </div>
        </div>
        


        //  <div className="center absolute mt2" id="image-display-div">
    
        //     <div class="main">
        //         <div class="one">
        //             <img id="ImageDisplay" src={imageUrl} alt="" />
        //             {results}
        //         </div>
        //         <div class="two"></div>
        //     </div>  
    
        // </div>

    )
}