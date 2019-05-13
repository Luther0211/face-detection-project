import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import Clarifai from 'clarifai';

//COMPONENT IMPORTS
import Demographics from "./Components/Demographics/Demographics";
import Colors from "./Components/Colors/Colors";
import MainMenu from "./Elements/mainMenu/mainMenu";


const app = new Clarifai.App({
    apiKey: '9a8585cb625d4219b1acedf7c71116f4'
});

class App extends Component {
    
    render() {
        
        const routes = (
            <main>
                
                <h1 className="mainTitle">SELECT A DETECTOR!</h1>   
            
                <div className="menu"> 
                    <MainMenu route='/demographics' title='Demographics' backgroundImage={'https://mumbrella.com.au/wp-content/uploads/2017/10/ThinkstockPhotos-587785374.jpg'} isActive={true} />
                    <MainMenu route='/colors' title='Colors' backgroundImage={'http://joco.name/wp-content/uploads/2014/03/rgb_2048_1.png'} />
                    <MainMenu route='/' title='Coming Soon' />
                    <MainMenu route='/' title='Coming Soon' />
                    <MainMenu route='/' title='Coming Soon' />
                    <MainMenu route='/' title='Coming Soon' />
                </div>
            
            </main>
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