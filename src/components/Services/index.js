import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Services() {
  return (
    <React.Fragment>
      <Container>
        <div className="process spacing">
          <h2 className="color--primary text-center process__heading">
            Our Services
          </h2>
          <p className="text-center process__subheading">
            We offer various logistics services.
          </p>
        </div>
        <Row className="process__details">
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/plane-1.png"
                  alt="Air delivery"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Air Freight</h4>
                <p>
                  We handle air freight package and ensure your product is
                  delivered to your receiver.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/shipment.png"
                  alt="Ocean delivery"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Ocean Freigt</h4>
                <p>
                  We move goods across the sea to their desired destination. And
                  we make sure your goods are safe.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/truck.png"
                  alt="Truck"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Ground Shipping</h4>
                <p>
                  Trust Eoglogistics with ground shipment of your goods, home
                  and abroad
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="process__details">
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/warehouse.png"
                  alt="warehouse service"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Warehousing</h4>
                <p>
                  We also handle storage of tours goods in safe warehousing. No
                  fear of damaege or loss.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/storage.png"
                  alt="Ocean delivery"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Storage</h4>
                <p>
                  We handle storage services for your goods. Store your goods
                  with us and be sure to have it when ready.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/van.png"
                  alt="Delivery Service"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Delivery Van</h4>
                <p>
                  Let deliver your large goods to their destination with our
                  delivery van service. your goods are in a safe hands.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Services;
