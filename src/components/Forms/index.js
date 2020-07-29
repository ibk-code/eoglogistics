import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function forms() {
  return (
    <React.Fragment>
      <Container>
        <div className=""></div>
        <Row className="process__details">
          <Col xs={12} md={7}>
            <div className="well">
              <Container>
                <Row>
                  <Col xs={12} md={6}>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="First name" />
                      </Form.Group>
                    </Form>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="email" placeholder="Last name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox"></Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="email"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Subject"
                    className="email"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="text-area">Message</Form.Label>
                  <Form.Control className="text-form" as="textarea" rows="3" />
                </Form.Group>
                <Button className="form-button">Send</Button>{" "}
              </Container>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="well-1">
              <div className="text-f">
                <h3>Address</h3>

                <p className="p-text">
                  2, Oyedele Oguniyi Street, Anthony, Lagos, Nigeria
                </p>
              </div>
              <div className="text-f">
                <h3>Phone-number</h3>

                <p className="p-text-r">+234 805 407 0378</p>
              </div>
              <div className="text-f">
                <h3>Email</h3>

                <p className="p-text-r"> info@eoglogisticsng.com </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default forms;
