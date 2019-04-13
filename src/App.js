import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import Clarifai from 'clarifai';

//COMPONENT IMPORTS
import Demographics from "./Components/Demographics/Demographics";
import Colors from "./Components/Colors/Colors";


const app = new Clarifai.App({
    apiKey: '9a8585cb625d4219b1acedf7c71116f4'
});

class App extends Component {
    
    render() {

        const routes = (
            <div>
                
                <div>
                    <Link to="/demographics"><h1>Demographics</h1></Link>
                </div>

                <div>
                    <Link to="/colors"><h1>Colors</h1></Link>
                </div>

                <div>
                    <Link to="/food"><h1>Food</h1></Link>
                </div>

                <div>
                    <Link to="/celebrities"><h1>Celebrities</h1></Link>
                </div>

                <div>
                    <Link to="/general"><h1>General</h1></Link>
                </div>

            </div>
        )

        return (
            <Switch>
                <Route path="/demographics" component={() => <Demographics app={app}/>} />
                <Route path="/colors" component={() => <Colors app={app} />} />
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