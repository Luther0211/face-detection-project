import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';

//COMPONENT IMPORTS
import InputForm from "./Components/InputForm/InputForm"


const app = new Clarifai.App({
    apiKey: '9a8585cb625d4219b1acedf7c71116f4'
   });

class App extends Component {

    onInputChangeHandler = (e) => {
        console.log(e.target.value)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        
        app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg")
            .then(
                (res) => {console.log(res)},
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
            
        </div>
    );
  }
}

export default App;