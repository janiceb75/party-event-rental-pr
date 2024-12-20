import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Logo from "./images/Logo.jpeg";
import { TiShoppingCart } from "react-icons/ti";
import photo1 from "./images/photo1.jpeg";

function App() {
  const handleClick = ()=> {
    let element = document.getElementById(".menuitem")
    console.log(element)
    element.style.css = ".menuitem.active"
  }
  return (
    <>
      <div class="header">
        <div class="logo">
          <img src={Logo}></img>
        </div>
        <div class="headermenu">
          <div class="menuitem" onClick={handleClick}>Home</div>
          <div class="menuitem" onClick={handleClick}>Rentals</div>
          <div class="menuitem" onClick={handleClick}>Request A Quote</div>
          <div class="menuitem" onClick={handleClick}>Event Gallery</div>
          <div class="menuitem" onClick={handleClick}>Contact Us</div>
        </div>
        <div class="quote"><TiShoppingCart /></div>
      </div>
      <div class="body">
        <div class="hero">
          <h1>Your Premier Event and <br></br> Party Rental Destination</h1>
          <br></br>
          <h3>Jumpworks is the top supplier of unique rental party items in the DMV.</h3>
          <br></br>
          <br></br>
          <button class="but">View All Rentals</button>
        </div>
        <div class="body2">
          <div class="bod2text">
            <h2>Who we are</h2>
            <br></br>
            <h1>Your One Stop Shop<br></br>For All Your Event<br></br>Rental Needs              
            </h1>
            <br></br>
            <p>We are a family run business offering a wide variety of rental items<br></br> to make your upcoming event a success. From mechanical rides<br></br> and inflatable bounce houses to live entertainment and lawn<br></br> games, we have everything you need to make your next party or<br></br> event one to remember!</p>
            </div>
          <div class="bod2img">
            <img src={photo1}></img>
          </div>
        </div>
        <div class="body3">
          <div class="bod3">
            <div class="api1">107+</div>
            <div class="bod3atext">Slides, Rides and Concessions</div>            
          </div>
          <div class="bod3">
            <div class="api2">1,445+</div>
            <div class="bod3btext">Successful Events</div>  
          </div>
          <div class="bod3">
            <div class="api3">17+</div>
            <div class="bod3ctext">Years Experience</div> 
          </div>
        </div>
        <div class="body4">
          <h2>What we offer</h2>
          <br></br>
          <h1>Featured Rental Options</h1>
          <br></br>
          <p>Browse our featured rentals to find the perfect entertainment for your next event.</p>
          <br></br>
          <br></br>
          <button class="but">View All Rentals</button>
        </div>
        <div class="body5">
          <div class="body5Menu"></div>
          <div class="body5Menu"></div>
          <div class="body5Menu"></div>
          <div class="body5Menu"></div>
          <div class="body5Menu"></div>
          <div class="body5Menu"></div>
        </div>
        <div class="body6"></div>
        <div class="body7">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="body8"></div>
      </div>
      <div class="footer">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
