import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function History() {
  return (
    <React.Fragment>
      <Container className="history">
        <Row>
          <Col sm={12} md={7}>
            <div>
              <h2 className="color--primary history__heading">Our History</h2>
            </div>
            <div className="history__content">
              <p>
                EOG Logistics International is a logistic, freight and courier
                services provider based in Lagos. EOG is proficient in all
                non-passenger transportation including freight movement and
                courier services throughout Nigeria and to neighboring West
                African Countries. We work with our clients to support their
                domestic and international logistics needs via road, air, rail,
                and sea transport. We also offer courier services.
              </p>
              <p>
                Our vision in EOG is to provide high quality, convenient and
                comprehensive Haulage, freight and courier services at the
                lowest possible cost and exceptional customer care services in a
                loving and caring way with strong emphasis on punctual delivery
                of goods with sound condition of freight on delivery.
              </p>
              <p>
                At EOG Logistics International, we proudly stand head and
                shoulders above our competitors offering similar logistics
                services. Our unique combination of experience, service, and
                technology allows us to provide logistics services that offer a
                high degree of reliability while remaining cost-effective.
              </p>
            </div>
            <Row className="spacing">
              <Col sm={12} md={6}>
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
                      We work with the local and international commercial
                      freight airlines to ensure that your long-distance freight
                      is delivered on-time and on a consistent basis.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="process__method">
                  <div className="process__icon">
                    <img
                      src="./asset/img/truck.png"
                      alt="Truck"
                      className="process__method--img"
                    />
                  </div>
                  <div className="process__info">
                    <h4>Road Freight and Haulage Services</h4>
                    <p>
                      We support local, interstate, and international road
                      freight transport, including solo and combined transports,
                      oversize cargo, and partial loads.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={5}>
            <img
              src="./asset/img/package.png"
              className="img-fluid mobile--hide"
              alt="about the company"
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default History;
