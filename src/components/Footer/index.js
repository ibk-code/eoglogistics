import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer--bg spacing">
        <Container>
          <div className="footer__wrap">
            <div>
              <img
                src="./asset/img/logo.png"
                className="logo"
                alt="Eoglogistics logo"
              />
              <p className="mt-4 text-white">
                Eoglogistics is a number one leading company in handling
                logistics and delivery across the border. A fast and cost
                effective freight logistics service
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <a href="/home" aria-label="footer home link">
                Home
              </a>
              <a href="/about" aria-label="footer about link">
                About
              </a>
              <a href="/contact" aria-label="footer contact link">
                Contact Us
              </a>
            </div>
            <div className="footer--service">
              <h4>Services</h4>
              <p>Air freight</p>
              <p>Ocean freight</p>
              <p>Ground Shipping</p>
              <p>Warehousing</p>
              <p>Storage</p>
              <p>Delivery Van</p>
            </div>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
