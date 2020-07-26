import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Process() {
  return (
    <React.Fragment>
      <Container>
        <div className="process">
          <h2 className="color--primary text-center process__heading">
            Our Process
          </h2>
          <p className="text-center process__subheading">
            Our process in handling your package
          </p>
        </div>
        <Row className="process__details">
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/inspection.png"
                  alt="Inspection"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Inspection</h4>
                <p>
                  We make sure all goods are well inspected and pass quality
                  check.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/review.png"
                  alt="Inspection"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Review</h4>
                <p>
                  Every goods is always reviewed at Eoglogistics. We make sure
                  no customer good is lost.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/delivery.png"
                  alt="Inspection"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Delivery</h4>
                <p>
                  We handle smooth delivery for every of our your goods. We make
                  sure we deliver to your doorstep.
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
