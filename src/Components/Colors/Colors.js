import React, { Component } from 'react';
import "./Colors.css"
//Elements
import Form from "../../Elements/Form/Form";
import Results from "../../Elements/Results/Results";

class Colors extends Component {
    state = {
        imageURL: '',
        outputs: []
    }



    onSubmitHandler = (e) => {
        e.preventDefault()
        
        this.setState({imageURL: e.target.children[0].children[1].children[1].value});
        setTimeout(() => {
            this.props.app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", this.state.imageURL)
            .then( res => console.log(res.outputs[0].data.colors))
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
                    title="Colors"
                />

                {msg}
                
                <Results 
                    imageUrl={this.state.imageURL} 
                    ColorsData={this.state.outputs} 
                />
                
            </div>
        );
    }
}

export default Colors;