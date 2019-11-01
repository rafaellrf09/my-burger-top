import React from 'react'
import "./Button.css"

const Button = (props) =>{ 
const btnClass = `Button ${props.btnType}`;
return (
    <button onClick={props.clicked} className={btnClass}>
        {props.children}
    </button>
);}

export default Button
