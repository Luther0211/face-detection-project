import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>FACE DETECTOR ONLINE</h1>
        <h3>Paste an image URL in the search box to use!</h3>
        
        <form>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
        </form>
        
      </div>
    );
  }
}

export default App;