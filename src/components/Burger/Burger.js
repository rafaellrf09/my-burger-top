import React from 'react'

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

import "./Burger.css"
const Burger = (props) => {
    let ingredientsArray = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
                return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} /> 
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (ingredientsArray.length === 0) {
        ingredientsArray = <p>Por favor, adicione ingredientes!</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />            
                {ingredientsArray}           
            <BurgerIngredient type="bread-bottom" />            
        </div>
    )
}

export default Burger
