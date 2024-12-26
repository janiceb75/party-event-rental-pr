import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Logo from "./images/Logo.jpeg"
import { TiShoppingCart } from "react-icons/ti"
import photo1 from "./images/photo1.jpeg"
import { FaBars } from "react-icons/fa"
import MobileMenu from "./components/mobilemenu"
import HeroSection from "./components/herosection"
import DesktopMenu from "./components/desktopmenu"

function App() {
  const [showmobilemenu, setShowMobileMenu] = useState(false)

  const burgerClick = () => {
    const element2 = document.querySelector(".hamburger")
    const element3 = document.querySelector(".header")
    const element4 = document.querySelector(".headermenu")
    const element5 = document.querySelector(".logo")
    if (element2) {
      //if the element2 is the hamburger class
      element2.style.display = "none"
      element3.classList.add("active")
      element4.classList.add("active")
      element5.classList.add("active")
    }
  }

  return (
    <>
      <DesktopMenu
        setShowMobileMenu={setShowMobileMenu}
        showmobilemenu={showmobilemenu}
      ></DesktopMenu>
      {showmobilemenu && <MobileMenu></MobileMenu>}

      <div className="body">
        <HeroSection></HeroSection>
        <div className="body2">
          <div className="bod2text">
            <h2>Who we are</h2>
            <br></br>
            <h1>
              Your One Stop Shop<br></br>For All Your Event<br></br>Rental Needs
            </h1>
            <br></br>
            <p>
              We are a family run business offering a wide variety of rental
              items<br></br> to make your upcoming event a success. From
              mechanical rides<br></br> and inflatable bounce houses to live
              entertainment and lawn<br></br> games, we have everything you need
              to make your next party or<br></br> event one to remember!
            </p>
          </div>
          <div className="bod2img">
            <img src={photo1}></img>
          </div>
        </div>
        <div className="body3">
          <div className="bod3">
            <div className="api1">107+</div>
            <div className="bod3atext">Slides, Rides and Concessions</div>
          </div>
          <div className="bod3">
            <div className="api2">1,445+</div>
            <div className="bod3btext">Successful Events</div>
          </div>
          <div className="bod3">
            <div className="api3">17+</div>
            <div className="bod3ctext">Years Experience</div>
          </div>
        </div>
        <div className="body4">
          <h2>What we offer</h2>
          <br></br>
          <h1>Featured Rental Options</h1>
          <br></br>
          <p>
            Browse our featured rentals to find the perfect entertainment for
            your next event.
          </p>
          <br></br>
          <br></br>
          <button className="but">View All Rentals</button>
        </div>
        <div className="body5">
          <div className="body5Menu"></div>
          <div className="body5Menu"></div>
          <div className="body5Menu"></div>
          <div className="body5Menu"></div>
          <div className="body5Menu"></div>
          <div className="body5Menu"></div>
        </div>
        <div className="body6"></div>
        <div className="body7">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="body8"></div>
      </div>
      <div className="footer">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default App
