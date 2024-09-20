import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer--bg spacing">
        <Container>
          <div className="footer__wrap">
            <div>
              <img
                src="./asset/img/logo.jpeg"
                className="logo"
                alt="Eoglogistics logo"
              />
              <p className="mt-4 text-white">
                EOG Logistics International is a logistic, freight and courier
                services provider based in Lagos.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <a href="/" aria-label="footer home link">
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
              <p>Courier Services</p>
              <p>Road Freight and Haulage</p>
            </div>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
