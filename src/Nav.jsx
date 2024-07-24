

  import React, { useState, useEffect } from "react";
  import "./nav.css";

  function Nav(){
    
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 1) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
    
    
    
      return(
          
          <div className={`navBar ${isScrolled ? "scrolled" : ""}`}>
              <nav className={`navElements ${isScrolled ? "scrolled" : ""}`}>
                  <div id="logo">
                    <a href="#">Vantra<span>.</span></a>  
                  </div>
                  <div className="navItems">
                      <a href="#">Services</a>
                      <a href="#">Work</a>
                      <a href="#">About</a>
                  </div>
                  <div className="start">
                      <button>Lets Start</button>
                  </div>
              </nav>
          </div>
      )
  }

  export default Nav