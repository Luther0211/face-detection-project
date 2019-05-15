import React, {Component} from 'react';
//Components
import Form from "../../Elements/Form/Form";
import Results from "../../Elements/Results/Results";
import Data from "./Data/Data"


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

        //Face boxes
        let boxResults = this.state.boxes.map(box => {
            let boxSize = {
                top: box.top, 
                right: box.right, 
                bottom: box.bottom, 
                left: box.left
            }
            return <div className="bounding-box" id={box.id} key={box.id} title={box.id} style={boxSize} onClick={(e) => this.onfaceBoxClickHandler(e)}></div>
        })

        //Active face data
        let age_appearance = null
        let gender_appearance = null
        let multicultural_appearance = null
        let DemographicsData = null

        if (this.state.activeOutput !== null) {
            //AGE
            age_appearance = this.state.activeOutput.age_appearance.concepts.map((age, i) => i < 5 
                ? <Data dataName={age.name + " years old"} percentage={age.value} key={`age-${i}`} index={i} /> 
                : null    
            )
            age_appearance.unshift(<div className="data-instr" key="data-instr-age"> <span className="appearance">Age Appearance</span> <span className="probability">Probability %</span> </div>)
            age_appearance.unshift(<h2 key="agekey" className="data-title">Age</h2>)

            //GENDER
            gender_appearance = this.state.activeOutput.gender_appearance.concepts.map((gender, i) => {
                return <Data dataName={gender.name} percentage={gender.value} key={`gender-${i}`} index={i} />
            })
            gender_appearance.unshift(<div className="data-instr" key="data-instr-gender"> <span className="appearance">Gender Appearance</span> <span className="probability">Probability %</span> </div>)
            gender_appearance.unshift(<h2 key="genderkey" className="data-title">Gender</h2>)

            //multicultural Appearance
            multicultural_appearance = this.state.activeOutput.multicultural_appearance.concepts.map((culturalAp, i) => {
                return <Data dataName={culturalAp.name} percentage={culturalAp.value} index={i} key={`multicultural-${i}`} />
            })
            multicultural_appearance.unshift(<div className="data-instr" key="data-instr-cultural"> <span className="appearance">Multicultural Appearance</span> <span className="probability">Probability %</span> </div>)
            multicultural_appearance.unshift(<h2 key="culturalkey" className="data-title">Multicultural Appearance</h2>)
            
            //Final
            console.log(this.state.activeOutput)
            DemographicsData = [...age_appearance, ...gender_appearance, ...multicultural_appearance]
        }



        return (
            <div className="App"> 
                
                <Form 
                    onInputSubmit={(e) => this.onSubmitHandler(e)}
                    title="Demographics Detector"
                />

                {msg}
                
                <Results 
                    imageUrl={this.state.imageURL} 
                    boxes={boxResults}
                    DemographicsData={DemographicsData} 
                />
                
            </div>
        );
    }
}

export default Demographics;