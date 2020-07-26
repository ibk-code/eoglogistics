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
                <h4>Choose Your Sevice</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt praesentium dicta consectetur fuga neque fugit a at.
                  Cum quod vero assumenda iusto.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <span className="steps__circle">2</span>
              <div className="steps__description">
                <h4>Choose Your Sevice</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt praesentium dicta consectetur fuga neque fugit a at.
                  Cum quod vero assumenda iusto.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <span className="steps__circle">3</span>
              <div className="steps__description">
                <h4>Choose Your Sevice</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt praesentium dicta consectetur fuga neque fugit a at.
                  Cum quod vero assumenda iusto.
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
