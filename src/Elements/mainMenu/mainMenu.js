import React from 'react'
import {Link} from 'react-router-dom'
import "./mainMenu.css"


export default props => {

    if(!props.backgroundImage) {
        return (
            <Link to={props.route} className="Link">
                <div className="card" style={{backgroundColor: `black`  }} >
                    <p className="card-title title" style={{backgroundColor: 'crimson'}}>{props.title}</p>
                </div>
            </Link>
        )

    } else {        
        return (
            <Link to={props.route} className="Link">
                <div className="card" style={{backgroundImage: `url(${props.backgroundImage})`  }} >
                    <p className="card-title title">{props.title}</p>
                </div>
            </Link>
        )

    }
}