import React, { Component } from 'react'

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSymmary/OrderSummary"

const INGREDIENT_PRICES = {
    salada : 1,
    queijo : 2,
    carne: 3.5,
    bacon: 2,
    ovo: 1.5
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salada: 0,
            ovo: 0,
            queijo: 0,
            bacon: 0,
            carne: 0,
        },
        totalPrice: 10,
        purchasable : false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({
            purchasable: sum > 0
        });
    }

    purchaseHandler = () =>{
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        alert("Continue")
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedConted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedConted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients : updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) return;
        const updatedConted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedConted;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients : updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice.toFixed(2)} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;