import React, { Component } from 'react';
//Elements
import Form from "../../Elements/Form/Form";
import Results from "../../Elements/Results/Results";

class Colors extends Component {
    state = {
        imageURL: '',
        outputs: []
    }




    render() {
        let msg = <p className="message">&nbsp;</p>
        //if (colors[0]) msg = let msg = <p className="message">The most prominent color is ${colors[0]}</p>


        let colorsData = null;


        return (
            <div className="App"> 
                
                <Form 
                    onInputSubmit={(e) => this.onSubmitHandler(e)}
                    title="Colors"
                />

                {msg}
                
                <Results 
                    imageUrl={this.state.imageURL} 
                    ColorsData={colorsData} 
                />
                
            </div>
        );
    }
}

export default Colors;