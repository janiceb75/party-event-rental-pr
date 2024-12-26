import React from "react"
import Logo from "../images/Logo.jpeg"

const MobileMenu = () => {
  return (
    <div className="mobilemenu">
      <div className="mobilelogo">
        <img src={Logo}></img>
      </div>
      <div className="menuitem">Home</div>
      <div className="menuitem">Rentals</div>
      <div className="menuitem">Request A Quote</div>
      <div className="menuitem">Event Gallery</div>
      <div className="menuitem">Contact Us</div>
    </div>
  )
}

export default MobileMenu
