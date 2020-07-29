import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Services() {
  return (
    <React.Fragment>
      <Container>
        <div className="process spacing" id="services">
          <h2 className="color--primary text-center process__heading">
            Our Services
          </h2>
          <p className="text-center process__subheading">
            We offer various logistics services.
          </p>
        </div>
        <Row className="process__details">
          <Col xs={12} md={6}>
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
                  EOG Logistics International provides a turnkey service for
                  your international air transport needs. We work with the local
                  and international commercial freight airlines to ensure that
                  your long-distance freight is delivered on-time and on a
                  consistent basis. We provide a comprehensive customs service
                  that ensures that your air freight is accompanied by all
                  necessary documentation for the countries of origin and
                  destination.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
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
                  EOG Logistics International sea freight services provide the
                  best way to handle your large-scale international logistics
                  needs. We have operations at major sea ports in Nigeria and we
                  work with an established network of sea freight transport
                  providers to ensure that your freight is transported via the
                  most time and cost-effective means. We support full and
                  partial container loads, and handle all customs documents for
                  countries of origin and destination.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="process__details">
          <Col xs={12} md={6}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/truck.png"
                  alt="Truck"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Courier Services</h4>
                <p>
                  Apart from large cargoes, we also deliver smaller parcels and
                  packages within metropolitan areas across Nigeria. We deliver
                  time sensitive documents and packages within West and
                  Southerner parts of Nigeria on the next Business Day and a
                  maximum of 72 hours to the far northern parts of Nigeria.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="process__method">
              <div className="process__icon">
                <img
                  src="./asset/img/van.png"
                  alt="Delivery Service"
                  className="process__method--img"
                />
              </div>
              <div className="process__info">
                <h4>Road Freight and Haulage Services</h4>
                <p>
                  EOG Logistics International offers full support for all of
                  your road freight needs. We support local, interstate, and
                  international road freight transport, including solo and
                  combined transports, oversize cargo, and partial loads. We
                  operate through an established network of road a freight
                  carrierswho have been through our extensive screening process.
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
