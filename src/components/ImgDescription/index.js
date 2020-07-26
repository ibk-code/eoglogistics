import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ImgDescription() {
  return (
    <React.Fragment>
      <Container fluid className="imgdesc">
        <Row noGutters={true}>
          <Col md={3} xs={12}>
            <img
              src="./asset/img/container-1.png"
              className="img-fluid"
              alt="freight"
            />
          </Col>
          <Col md={3} xs={12}>
            <img
              src="./asset/img/pack.png"
              className="img-fluid"
              alt="Packing"
            />
          </Col>
          <Col md={3} xs={12}>
            <img src="./asset/img/air.png" className="img-fluid" alt="air" />
          </Col>
          <Col md={3} xs={12}>
            <img src="./asset/img/ship.png" className="img-fluid" alt="ship" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ImgDescription;
