import React, { Component } from 'react';
import './App.css';
//COMPONENT IMPORTS
import InputForm from "./Components/InputForm/InputForm"


// API 9a8585cb625d4219b1acedf7c71116f4
class App extends Component {

    onInputChangeHandler = (e) => {
        console.log(e.target.value)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
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