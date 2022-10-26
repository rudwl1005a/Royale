import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import payment from "../../img/paypal.jpg";
import card from "../../img/master-card.jpg";

import "./style.css";

function Checkout(props) {
  return (
    <>
      <section className="checkout-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="checkout-left-box">
                <h3>Billing Details</h3>
                <form>
                  <Row className="checkout-form">
                    <Col md={6}>
                      <input
                        placeholder="Your First Name"
                        type="text"
                        name="firstname"
                        id="name23"
                      />
                    </Col>
                    <Col md={6}>
                      <input
                        placeholder="Your Last Name"
                        type="text"
                        name="lastname"
                        id="name22"
                      />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <input
                        placeholder="Country"
                        type="text"
                        name="country"
                        id="cntr2"
                      />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <input
                        placeholder="Your Address"
                        type="text"
                        name="address"
                        id="addr2"
                      />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <input
                        placeholder="Town / City"
                        type="text"
                        name="town"
                        id="Town2"
                      />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={6}>
                      <input
                        placeholder="Your Email Address"
                        type="email"
                        name="info2"
                        id="info2"
                      />
                    </Col>
                    <Col md={6}>
                      <input
                        placeholder="Your Mobile Number"
                        type="text"
                        name="info2"
                        id="info12"
                      />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <textarea
                        placeholder="Write Order Note Here..."
                        name="ordernote"
                        defaultValue={""}
                      />
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col lg={4}>
              <div className="order-summury-box">
                <h3>Order Summury</h3>
                <div className="summury-inn">
                  <table>
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>$270</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handling</td>
                        <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td>$270</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="booking-right">
                <div className="fag-payment clearfix">
                  <div className="payment">
                    <input type="radio" id="ss-option" name="selector" />
                    <label htmlFor="ss-option">Direct Bank Transfer</label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference.order won’t be
                      shipped until the funds have cleared.
                    </p>
                  </div>
                  <div className="payment">
                    <input type="radio" id="f-option" name="selector" />
                    <label htmlFor="f-option">Cheque Payment</label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                  </div>
                  <div className="payment">
                    <input type="radio" id="s-option" name="selector" />
                    <label htmlFor="s-option">Credit Card</label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <img src={card} alt="credit card" />
                  </div>
                  <div className="payment">
                    <input type="radio" id="t-option" name="selector" />
                    <label htmlFor="t-option">Paypal</label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <img src={payment} alt="credit card" />
                  </div>
                </div>
                <div className="action-btn">
                  <Link to="/" className="fag-btn">
                    place order <span />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Checkout;
