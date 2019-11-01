import React from 'react'

import Aux from "../../../hoc/Aux"
import Button from "../../../UI/Button/Button"

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
            <p><strong>Total: R$ {props.price}</strong></p>
            <p>Enviar Pedido?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancelar</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Enviar</Button>
        </Aux>
    )
}

export default OrderSummary
