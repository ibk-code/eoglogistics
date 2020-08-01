import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Process() {
  return (
    <React.Fragment>
      <Container>
        <div className="process">
          <h2 className="color--primary text-center process__heading">
            Our Categories
          </h2>
          <p className="text-center process__subheading">
            Various area of services cover
          </p>
        </div>
        <Row className="process__details">
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/cargo.png"
                  alt="Inspection"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>PROJECT CARGO HANDLING</h4>
                <p>
                  EOG Logistics also specializes in project cargo moves to
                  customers specification and standards, including
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/logistic.png"
                  alt="Inspection"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>LOGISTIC SOLUTIONS</h4>
                <p>
                  At EOG Logistics, we believe in establishing strong
                  partnerships and close working relationships with our
                  customers to produce a comprehensive supply chain management
                  service.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/wrench.png"
                  alt="Inspection"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Aviation Services/Ground Handling</h4>
                <p>
                  At EOG Logistics, we can provide solutions to all your charter
                  needs in respective of scale, we strive to find you the most
                  suitable aircraft for your specific requirements, be it for
                  intercontinental cargo movement or for sub-regional operations
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Process;
