import React from 'react'
import Aux from "../../hoc/Aux"


import "./Layout.scss" 

function Layout(props) {
    return (
        <Aux>
            <div>
                Toobar , SideDrawer, Backdrop
            </div>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout
