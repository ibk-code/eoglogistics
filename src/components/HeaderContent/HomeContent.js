import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HomeHeader() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1 className="header__text">
              <span className="header__text--main">EOG Logistics</span>
              <span className="header__text--sub">
                We offer the best service in freight and logistics service home
                and abroad. Let handle your logistics
              </span>
            </h1>
            <a
              className="btn__brand btn--transform"
              href="#"
              aria-label="get started button"
            >
              Get Started
            </a>
          </Col>
          <Col xs={false} md={6}>
            <img
              src="./asset/img/banner-1.png"
              alt="Eog logistic description"
              className="img-fluid home__img"
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default HomeHeader;
