import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect, Link } from 'react-router-dom';
import './App.css';
import Clarifai from 'clarifai';

//COMPONENT IMPORTS
import 
DemographicsComponent from "./Components/DemographicsComponent/DemographicsComponent";


const app = new Clarifai.App({
    apiKey: '9a8585cb625d4219b1acedf7c71116f4'
});

class App extends Component {
    
    render() {

        const routes = (
            <div>
                
                <div>
                    <Link to="/demographics">Demographics</Link>
                </div>

                <div>
                    <Link to="/colors">Colors</Link>
                </div>

                <div>
                    <Link to="/food">Food</Link>
                </div>

                <div>
                    <Link to="/celebrities">Celebrities</Link>
                </div>

                <div>
                    <Link to="/general">General</Link>
                </div>

            </div>
        )

        return (
            <Switch>
                <Route path="/demographics" component={() => <DemographicsComponent app={app}/>} />
                <Route path="/colors" render={() => <Link to="/">home</Link>} />
                <Route path="/food" render={() => <Link to="/">home</Link>} />
                <Route path="/celebrities" render={() => <Link to="/">home</Link>} />
                <Route path="/general" render={() => <Link to="/">home</Link>} />
                <Route path="/" exact render={() => routes} />
                <Redirect to="/" />
            </Switch>
        )
    }
    
}

export default App;