import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Particles from 'react-particles-js'
import * as serviceWorker from './serviceWorker';

const app = (
    <BrowserRouter>
        <Particles className="Particles"
                    params={{
                        "particles": {
                            "number": {
                              "value": 60,
                              "density": {
                                "enable": true,
                                "value_area": 500
                              }
                            },
                            "color": {
                              "value": "#ffffff"
                            },
                            "shape": {
                              "type": "circle",
                              "stroke": {
                                "width": 0,
                                "color": "#000000"
                              },
                            },
                            "opacity": {
                              "value": 0.3,
                              "random": false,
                              "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                              }
                            },
                            "size": {
                              "value": 1,
                              "random": true,
                              "anim": {
                                "enable": false,
                                "speed": 10,
                                "size_min": 0.1,
                                "sync": false
                              }
                            },
                            "line_linked": {
                              "enable": true,
                              "distance": 200,
                              "color": "#ffffff",
                              "opacity": 0.4,
                              "width": 2
                            },
                            "move": {
                              "enable": true,
                              "speed": 2,
                              "direction": "none",
                              "random": false,
                              "straight": false,
                              "out_mode": "out",
                              "bounce": false,
                              "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                              }
                            }
                          },
                          "interactivity": {
                            "detect_on": "window",
                            "events": {
                              "onhover": {
                                "enable": true,
                                "mode": "grab"
                              },
                              "onclick": {
                                "enable": true,
                                "mode": "bubble"
                              },
                              "resize": true
                            },
                            "modes": {
                              "grab": {
                                "distance": 200,
                                "line_linked": {
                                  "opacity": 1
                                }
                              },
                              "bubble": {
                                "distance": 200,
                                "size": 10,
                                "duration": .4,
                                "opacity": 0.8,
                                "speed": 3
                              },
                              "repulse": {
                                "distance": 400,
                                "duration": 0.4
                              },
                              "push": {
                                "particles_nb": 4
                              },
                              "remove": {
                                "particles_nb": 2
                              }
                            }
                          },
                          "retina_detect": true
                    }} 
                />
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
