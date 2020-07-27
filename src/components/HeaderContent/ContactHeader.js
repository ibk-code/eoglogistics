import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactHeader() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1 className="header__text about--headin">
              <span className="header__text--main">Contact Us</span>
              <span className="header__text--sub">
              We are always happy to help, Get in touch with us
                
              </span>
            </h1>
          </Col>
          <Col xs={false} md={6}>
            <img
              src="./asset/img/image.png"
              alt=""
              className="img-fluid about--img"
            />
          </Col>
        </Row>
        <div>
          {/* <img
            src="./asset/img/"
            alt="Vector background"
            className="img-fluid vector--one"
          />
          <img
            src="./asset/img/"
            alt="Vector background"
            className="img-fluid vector--two"
          /> */}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default ContactHeader;
