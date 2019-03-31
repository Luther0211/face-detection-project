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
        input: '',
        imageURL: '',
        outputs: [],
        box: {},
    }

    // HANDLERS
    calculateFaceLocation = (data) => {
        console.log(data)
        const faceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
        document.getElementsByClassName('bounding-box')[0].id = data.outputs[0].data.regions[0].id

        return {
            leftCol: faceBox.left_col * 100,
            topRow: faceBox.top_row * 100,
            rightCol: 100 - faceBox.right_col * 100,
            bottomRow: 100 - faceBox.bottom_row * 100
        }
      }
    
      displayFaceLocation = (box) => {
        this.setState({box: box})
      }
    


      onInputChangeHandler = (event) => {
        this.setState({input: event.target.value});
      } 
    
      onSubmitHandler = (e) => {
        e.preventDefault()
        this.setState({imageURL: this.state.input});
        app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.input)
            .then( res => this.displayFaceLocation(this.calculateFaceLocation(res)))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div className="App">
                <h1>IMAGE RECOGNITION AI ONLINE</h1>
                
                <InputForm 
                    onInputSubmit={(e) => this.onSubmitHandler(e)} 
                    onInputChange={(e) => this.onInputChangeHandler(e)}
                />
                <ImageDisplay imageUrl={this.state.imageURL} box={this.state.box} />
            </div>
        );
    }
}

export default App;