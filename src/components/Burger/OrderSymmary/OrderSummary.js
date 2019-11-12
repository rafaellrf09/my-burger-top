import React, {Component} from 'react'

import Aux from "../../../hoc/Aux"
import Button from "../../../UI/Button/Button"

class OrderSummary extends Component {
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("orderSummary")
    }


    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (<li key={igKey}>
                        <span style={{textTransform: "capitalize"}}>{igKey}</span>: 
                        {this.props.ingredients[igKey]}
                    </li>
                    )
        })
        return(
        <Aux>
            <h3>Seu Pedido</h3>
            <p>Seu Hamburger delicioso possui esses ingredientes:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total: R$ {this.props.price}</strong></p>
            <p>Enviar Pedido?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancelar</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>Enviar</Button>
        </Aux>
        );
    }
}
export default OrderSummary
