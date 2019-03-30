import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';

//COMPONENT IMPORTS
import InputForm from "./Components/InputForm/InputForm"
import ImageDisplay from "./Components/ImageDisplay/ImageDisplay"


const app = new Clarifai.App({
    apiKey: '9a8585cb625d4219b1acedf7c71116f4'
   });

class App extends Component {
    state = {
        inputUrl: '',
        outputs: [],
        faceBox: {},
    }

    // HANDLERS
    calculateFaceBox = (data) => {
        const image = document.getElementById('ImageDisplay');
        const dataBox = data.outputs[0].data.regions[0].region_info.bounding_box
        const width = +image.width
        const height = +image.height
        
        return {
            leftCol: dataBox.left_col * width,
            topRow: dataBox.top_row * height,
            rightCol: width - ( dataBox.right_col * width ),
            bottomRow: height - ( dataBox.bottom_row * height )
        }
    }

    onResultHandler = (response) => {
        this.setState({
            outputs: [...response.outputs[0].data.regions],  
            faceBox: {...this.calculateFaceBox(response)}
        })
        console.log('[STATE]: ', this.state)
    }

    onErrorHandler = (error) => {
        console.log(error)
        alert('Image not available')
    }

    onInputChangeHandler = (e) => this.setState({inputUrl: e.target.value})

    onSubmitHandler = (e) => {
        e.preventDefault()
        app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.inputUrl)
            .then(res => this.onResultHandler(res))
            .catch(err => this.onErrorHandler(err))
    }



    render() {
        return (
            <div className="App">
                <h1>IMAGE DETECTOR AI ONLINE</h1>
                
                <InputForm 
                    onInputSubmit={(e) => this.onSubmitHandler(e)} 
                    onInputChange={(e) => this.onInputChangeHandler(e)}
                />
                <ImageDisplay imageUrl={this.state.inputUrl} />
            </div>
        );
    }
}

export default App;