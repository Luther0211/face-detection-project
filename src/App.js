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
        inputUrl: ''
    }

    // eg: "https://samples.clarifai.com/face-det.jpg"

    onInputChangeHandler = (e) => {
        this.setState({inputUrl: e.target.value})
        console.log(e.target.value)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        //-------------------CLARIFAI MODEL (FACE DETECTION)
        app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.inputUrl)
            .then(
                (res) => {
                    this.setState({inputUrl: res.outputs[0].input.data.image.url})
                    console.log(res)
                },
                (err) => {console.log(err)}
            );

        console.log('detecting...')
        
    }


  render() {
    return (
        <div className="App">
            <h1>FACE DETECTOR ONLINE</h1>
            
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