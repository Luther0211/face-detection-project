import React, { Component } from 'react';
//Elements
import Form from "../../Elements/Form/Form";
import Results from "../../Elements/Results/Results";
import Data from "./Data/Data"

class Colors extends Component {
    state = {
        imageURL: '',
        outputs: [],
        display: []
    }


    displayResultColors = (array) => {
        array.sort((a, b) =>  b.value - a.value );
        
        console.log(array)

        const colors = array.map(color => (
            <Data 
                style={{height: `${color.value * 100}%`, backgroundColor: `${color.raw_hex}`}} 
                key={color.value}
                name={color.w3c.name}
                hex={color.raw_hex}
                colorValue={Math.round(color.value * 100)}
            />
        ))

        this.setState({outputs: array, display: colors})
    }


    onSubmitHandler = (e) => {
        e.preventDefault()
        
        this.setState({imageURL: e.target.children[0].children[1].children[1].value});
        setTimeout(() => {
            this.props.app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", this.state.imageURL)
            .then( res => this.displayResultColors(res.outputs[0].data.colors))
            .catch(err => console.log(err))
        }, 0)
    }

    render() {
        let msg = <p className="message">&nbsp;</p>
        //if (colors[0]) msg = let msg = <p className="message">The most prominent color is ${colors[0]}</p>


        return (
            <div className="App"> 
                
                <Form 
                    onInputSubmit={(e) => this.onSubmitHandler(e)}
                    title="Colors Detector"
                />

                {msg}
                
                <Results 
                    imageUrl={this.state.imageURL} 
                    ColorsData={this.state.display}
                    fixedHeight='600px' 
                />
                
            </div>
        );
    }
}

export default Colors;