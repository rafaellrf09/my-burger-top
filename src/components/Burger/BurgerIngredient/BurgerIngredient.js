import React from 'react'
import PropTypes from "prop-types"

import "./BurgerIngredient.css"

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type){
        case("bread-bottom"):
            ingredient = <div className="BreadBottom"></div>;
            break

        case("bread-top"):
            ingredient = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            );
            break

        case("carne"):
                ingredient = <div className="Meat"></div>;
            break

        case("queijo"):
            ingredient = <div className="Cheese"></div>;
            break 

        case("salada"):
            ingredient = <div className="Salad"></div>;
            break 

        case("bacon"):
            ingredient = <div className="Bacon"></div>;
            break 
        case("ovo"):
            ingredient = (
                <div className="ovo">
                    <div className="gema"></div>
                    <div className="clara"></div>
                </div>
            );
            break 
        default:
            ingredient = null;
        }

    return ingredient
}

BurgerIngredient.prototypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngredient
