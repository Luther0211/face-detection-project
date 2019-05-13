import React from 'react'
import {Link} from 'react-router-dom'
import "./mainMenu.css"


export default props => {

    if(!props.backgroundImage) {
        return (
            <Link to={props.route}>
                <div class="card" style={{backgroundColor: `black`  }} >
                    <p class="card-title title" style={{backgroundColor: 'crimson'}}>{props.title}</p>
                </div>
            </Link>
        )

    } else {        
        return (
            <Link to={props.route}>
                <div class="card" style={{backgroundImage: `url(${props.backgroundImage})`  }} >
                    <p class="card-title title">{props.title}</p>
                </div>
            </Link>
        )

    }
}