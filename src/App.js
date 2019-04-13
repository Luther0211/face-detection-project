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
        return (
            <Switch>
                <Route path="/demographics" component={() => <DemographicsComponent app={app}/>} />
                <Route path="/" exact render={() => <Link to="/demographics">Demographics</Link>} />
                <Redirect to="/" />
            </Switch>
        )
    }
    
}

export default withRouter(App);