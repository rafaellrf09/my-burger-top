import React from 'react'

import "./BuildControl.css"

const BuildControl = (props) => {
    return (
        <div className="BuildControl">
           <div className="Label">
                {props.label}
            </div> 
            <button className="More" onClick={props.added}>Mais</button>
            <button className="Less" onClick={props.removed} disabled={props.disabled}>Menos</button>
        </div>
    )
}

export default BuildControl
