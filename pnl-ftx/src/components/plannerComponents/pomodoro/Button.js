import React from 'react'
import "./Button.css"
export function Button(props) {
    return(
        <button id={props.buttonId} className="Button" onClick={() => props.actionClick(props.type)}>
            {props.children}
        </button>
    )
}
