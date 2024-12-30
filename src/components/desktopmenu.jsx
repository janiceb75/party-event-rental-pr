import React from "react"
import { TiShoppingCart } from "react-icons/ti"
import { FaBars } from "react-icons/fa"
import Logo from "../images/Logo.jpeg"

const DesktopMenu = ({ setShowMobileMenu, showmobilemenu }) => {
  const handleClick = () => {
    //find any element that currently has the "menuactive" state
    const element = document.querySelector(".menuitem.active")
    if (element) {
      //if there is an active menu item, remove the active class from it
      element.classList.remove("active")
    }
    //add the active class to the menuitem clicked, if the previous if statement does not apply
    event.target.classList.add("active")
  }
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo}></img>
      </div>
      <div className="headermenu">
        <div className="menuitem" onClick={handleClick}>
          Home
        </div>
        <div className="menuitem" onClick={handleClick}>
          Rentals
        </div>
        <div className="menuitem" onClick={handleClick}>
          Request A Quote
        </div>
        <div className="menuitem" onClick={handleClick}>
          Event Gallery
        </div>
        <div className="menuitem" onClick={handleClick}>
          Contact Us
        </div>
      </div>
      <div className="quote">
        <TiShoppingCart />
      </div>
      <div
        className="hamburger"
        onClick={() => setShowMobileMenu(!showmobilemenu)}
      >
        <FaBars />
      </div>
    </div>
  )
}

export default DesktopMenu
