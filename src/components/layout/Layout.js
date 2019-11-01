import React from 'react'
import Aux from "../../hoc/Aux"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"

import "./Layout.scss" 

function Layout(props) {
    return (
        <Aux>
            <div>
                <Toolbar/> , SideDrawer, Backdrop
            </div>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout
