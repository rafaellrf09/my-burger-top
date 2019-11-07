import React from 'react'


import "./SideDrawer.css"

import Aux from "../../../hoc/Aux"
import Backdrop from "../../../UI/Backdrop/Backdrop"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
const SideDrawer = (props) => {

    let classes = "SideDrawer Close";
    if(props.open) classes = "SideDrawer Open"

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={classes}>
                <div className="LogoSideDrawer"><Logo /></div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer
