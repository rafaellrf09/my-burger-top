import React from 'react';


import "./NavigationItems.css"

import NavigationItem from "./NavigationItem/NavigationItem"
const NavigationItens = (props) => (
        <ul className="NavigationItems">
            <NavigationItem link="/">Montar</NavigationItem>
            <NavigationItem link="/">Link 2 </NavigationItem>
        </ul>
    )


export default NavigationItens
