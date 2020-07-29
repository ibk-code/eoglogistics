import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutHeader() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1 className="header__text about--heading">
              <span className="header__text--main">About Us</span>
              <span className="header__text--sub">
                Our vision in EOG is to provide high quality, convenient and
                comprehensive Haulage, freight and courier services at the
                lowest possible cost.
              </span>
            </h1>
          </Col>
          <Col xs={false} md={6}>
            <img
              src="./asset/img/banner-2.png"
              alt="Eog logistic about description"
              className="img-fluid about--img"
            />
          </Col>
        </Row>
        <div>
          <img
            src="./asset/img/vector-3.svg"
            alt="Vector background"
            className="img-fluid vector--one"
          />
          <img
            src="./asset/img/vector-4.svg"
            alt="Vector background"
            className="img-fluid vector--two"
          />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default AboutHeader;
