import React from 'react'
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"


import "./Toolbar.css"
const Toolbar = (props) => (
    <header className="Toolbar">
        <div className="Menu" ><DrawerToggle clicked={props.drawerToggleClicked}/></div>
        <div className="LogoToolbar">
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar
