import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';

//COMPONENT IMPORTS
import DemographicsForm from "./Components/DemographicsForm/DemographicsForm"
import ImageDisplay from "./Components/ImageDisplay/ImageDisplay"


const app = new Clarifai.App({
    apiKey: '9a8585cb625d4219b1acedf7c71116f4'
   });

class App extends Component {
    state = {
        imageURL: '',
        outputs: [],
        boxes: [],
        activeOutput: {}
    }

    // HANDLERS
    onfaceBoxClickHandler = (e) => { // grabs clicked facebox's id
        window.document.querySelectorAll(".bounding-box").forEach(el => {
            el.classList.remove("active")
        })
        e.target.classList.add("active")     
        console.log(e.target.id)
    }

    saveResults = (array) => { //---- saves results to state.outputs
        this.setState({outputs: [...array]})
    }

    calculateFaceLocations = (data) => { //---- calculates all face boxes & saves them in state.boxes array
        this.saveResults(data.outputs[0].data.regions)
        
        let boxes = this.state.outputs.map(output => {
            return {
                id: output.id,
                top: (output.region_info.bounding_box.top_row * 100) + '%', 
                right: 100 - (output.region_info.bounding_box.right_col * 100) + '%', 
                bottom: 100 - (output.region_info.bounding_box.bottom_row * 100) + '%', 
                left: (output.region_info.bounding_box.left_col * 100) + '%'
            }
        })
        this.setState({boxes: [...boxes]})
      }

    
      onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.children[0].children[1].children[1].value)
        this.setState({imageURL: e.target.children[0].children[1].children[1].value, outputs: [], boxes: []});
        setTimeout(() => {
            app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.imageURL)
            .then( res => this.calculateFaceLocations(res))
            .catch(err => console.log(err))
        }, 0)
    }


    render() {
        return (
            <div className="App">             
                <DemographicsForm onInputSubmit={(e) => this.onSubmitHandler(e)} />
                <ImageDisplay imageUrl={this.state.imageURL} boxes={this.state.boxes} onFaceBoxClick={(e) => this.onfaceBoxClickHandler(e)} />
            </div>
        );
    }
}

export default App;