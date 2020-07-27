import React from "react";
import Navigation from "../Navbar";
import HomeHeader from "../HeaderContent/HomeContent";
import AboutHeader from "../HeaderContent/AboutHeader";
import ContactHeader from "../HeaderContent/ContactHeader";

function Header({ home, about, contact }) {
  return (
    <React.Fragment>
      <header>
        <Navigation></Navigation>
        <div className="header__curvy">
          <img src="./asset/img/rectangle1.svg" alt="first curvy line" />
        </div>
        {home && <HomeHeader />}
        {about && <AboutHeader />}
        {contact && <ContactHeader />}
        <div className="header__curvy--bottom">
          <img src="./asset/img/rectangle2.svg" alt="second curvy line" />
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
