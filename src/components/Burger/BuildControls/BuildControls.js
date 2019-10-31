import React from 'react'
import BuildControl from "./BuildControl/BuildControl"
import "./BuildControls.css"

const controls = [
    { label: "Salada", type: "salad"},
    { label: "Bacon", type: "bacon"},
    { label: "Carne", type: "meat"},
    { label: "Queijo", type: "cheese"},
];

const BuildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>
                Total a pagar: <strong>R${props.totalPrice.toFixed(2)}</strong>
            </p>
            {controls.map(control =>( 
                <BuildControl 
                    key={control.label} 
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)} 
                    disabled={props.disabled[control.type]}/>
            ))}
        </div>
    )
}

export default BuildControls
