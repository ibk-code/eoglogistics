import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function WorkingProcess() {
  return (
    <React.Fragment>
      <div className="steps spacing">
        <h2 className="color--primary text-center steps__heading">
          HOW IT WORKS
        </h2>
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <span className="steps__circle">1</span>
              <div className="steps__description">
                <h4>Book</h4>
                <p>
                  Book us for a any logistics service of your choice today. Tell
                  us what you want.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <span className="steps__circle">2</span>
              <div className="steps__description">
                <h4>Choose Your Sevice</h4>
                <p>
                  Choose the kind of logistics you want us to carry out for you
                  today from our various services.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <span className="steps__circle">3</span>
              <div className="steps__description">
                <h4>Delivery</h4>
                <p>
                  We handle the delivery and safery of your package. At
                  eoglogistics your package is in the safest hands
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default WorkingProcess;
