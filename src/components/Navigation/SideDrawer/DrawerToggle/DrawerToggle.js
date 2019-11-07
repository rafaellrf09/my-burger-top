import React from 'react'
import "./DrawerToggle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacon } from "@fortawesome/free-solid-svg-icons"
const DrawerToggle = (props) => {
    return (
        <div className="DrawerToggle" onClick={props.clicked}>
            <FontAwesomeIcon icon={faBacon} size="lg"/>
        </div>
    )
}

export default DrawerToggle
