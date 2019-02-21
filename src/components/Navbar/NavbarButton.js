import React from 'react';
import './NavbarButton.css'
const NavbarButton = props => {
  return (
    <span className = "NavbarButton" style = {props.style} onClick = {props.showNavBar}>☰</span>
  )
}

export default NavbarButton;
