import React from 'react'
import {Link} from 'react-router-dom'
import "./mainMenu.css"


export default props => {

    let desc = "";

    switch(true) {
        case props.title === 'Demographics':
            desc = 'Predict age, gender, and cultural appearance of detected faces';
            break;

        case props.title === 'Colors':
            desc = 'Identify the dominant colors present in your media in hex or W3C form'
            break;

        default:
            desc = "No Description"
            break;
    }

    return (
        <Link to={props.route} className="menu-option">
            <div className="card">
                <div className="card__image" style={{backgroundImage: `url(${props.backgroundImage})`}} ></div>
                <p className="card__title">{props.title}</p>
                <p className="card__desc">
                    {desc}
                </p>
            </div>
        </Link>
    )
}