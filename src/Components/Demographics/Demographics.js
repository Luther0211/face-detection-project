import React, {Component} from 'react';
//Components
import Form from "../../Elements/Form/Form";
import Results from "./Results/Results";


class Demographics extends Component {
    state = {
        imageURL: '',
        outputs: [],
        boxes: [],
        activeOutput: null
    }

    // HANDLERS
    onfaceBoxClickHandler = (e) => { // grabs clicked facebox's id
        let data = {}

        window.document.querySelectorAll(".bounding-box").forEach(el => {
            el.classList.remove("active")
        })
        e.target.classList.add("active")     
        console.log(e.target.id)

        this.state.outputs.forEach(output => {
            if(output.id === e.target.id) {
                data = {...output.data.face}
            }
        })
        this.setState({activeOutput: data})
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
        
        this.setState({imageURL: e.target.children[0].children[1].children[1].value, outputs: [], boxes: [], activeOutput: null});
        setTimeout(() => {
            this.props.app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.imageURL)
            .then( res => this.calculateFaceLocations(res))
            .catch(err => console.log(err))
        }, 0)
    }


    render() {
        let msg = <p className="message">&nbsp;</p>
        if(this.state.boxes.length > 0) {
            msg = <p className="message">Click on a face!</p>
        }

        return (
            <div className="App"> 
                
                <Form 
                    onInputSubmit={(e) => this.onSubmitHandler(e)}
                    title="Demographics"
                />

                {msg}
                
                <Results 
                    imageUrl={this.state.imageURL} 
                    boxes={this.state.boxes} 
                    onFaceBoxClick={(e) => this.onfaceBoxClickHandler(e)} 
                    activeFaceData={this.state.activeOutput} 
                />
                
            </div>
        );
    }
}

export default Demographics;