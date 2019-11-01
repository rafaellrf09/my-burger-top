import React from 'react'

import Aux from "../../../hoc/Aux"

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>: 
                    {props.ingredients[igKey]}
                </li>
                )
    })
    return (
        <Aux>
            <h3>Seu Pedido</h3>
            <p>Seu Hamburger delicioso possui esses ingredientes:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Finalizar compra?</p>
        </Aux>
    )
}

export default OrderSummary
