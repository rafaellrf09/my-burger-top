import React from 'react'
import BuildControl from "./BuildControl/BuildControl"
import "./BuildControls.css"

const controls = [
    { label: "Salada", type: "salada"},
    { label: "Bacon", type: "bacon"},
    { label: "Carne", type: "carne"},
    { label: "Queijo", type: "queijo"},
    { label: "Ovo", type: "ovo"},
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
            <button 
                className="OrderButton" 
                disabled={!props.purchasable}
                onClick={props.ordered}>Realizar pedido</button>
        </div>
    )
}

export default BuildControls
