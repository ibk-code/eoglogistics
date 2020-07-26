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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis deleniti reprehenderit animi est eaque corporis!
                Nisi, asperiores nam amet doloribus, soluta ut reiciendis.
                Consequatur modi rem, vero eos ipsam voluptas.
              </p>
              <p>
                Error minus sint nobis dolor laborum architecto, quaerat.
                Voluptatum porro expedita labore esse velit veniam laborum quo
                obcaecati similique iusto delectus quasi!
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
                      We handle air freight package and ensure your product is
                      delivered to your receiver.
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
                    <h4>Ground Shipping</h4>
                    <p>
                      Trust Eoglogistics with ground shipment of your goods,
                      home and abroad
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
