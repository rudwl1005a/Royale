import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../img/product-1.png";
import product2 from "../../img/product-3.png";

import "./style.css";

function Cart(props) {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="fag-cart-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="cart-table-left">
                <h3>Shopping Cart</h3>
                <div className="table-responsive cart_box">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Preview</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="shop-cart-item">
                        <td className="fag-cart-preview">
                          <Link to="/product-single">
                            <img src={product1} alt="cart-1" />
                          </Link>
                        </td>
                        <td className="fag-cart-product">
                          <Link to="/product-single">
                            <p>Sunglasses</p>
                          </Link>
                        </td>
                        <td className="fag-cart-price">
                          <p>$10</p>
                        </td>
                        <td className="fag-cart-quantity">
                          <div className="num-block skin-2">
                            <div className="num-in">
                              <input
                                type="number"
                                className="in-num"
                                defaultValue={1}
                                readOnly=""
                              />
                            </div>
                          </div>
                        </td>
                        <td className="fag-cart-total">
                          <p>$20</p>
                        </td>
                        <td className="fag-cart-close">
                          <Link to="/" onClick={onClick}>
                            <FaTimes />
                          </Link>
                        </td>
                      </tr>
                      <tr className="shop-cart-item">
                        <td className="fag-cart-preview">
                          <Link to="/product-single">
                            <img src={product2} alt="cart-1" />
                          </Link>
                        </td>
                        <td className="fag-cart-product">
                          <Link to="/product-single">
                            <p>Flip-flops</p>
                          </Link>
                        </td>
                        <td className="fag-cart-price">
                          <p>$12</p>
                        </td>
                        <td className="fag-cart-quantity">
                          <div className="num-block skin-2">
                            <div className="num-in">
                              <input
                                type="number"
                                className="in-num"
                                defaultValue={1}
                                readOnly=""
                              />
                            </div>
                          </div>
                        </td>
                        <td className="fag-cart-total">
                          <p>$12</p>
                        </td>
                        <td className="fag-cart-close">
                          <Link to="/" onClick={onClick}>
                            <FaTimes />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="cart-clear">
                  <Link to="/" onClick={onClick}>
                    clear cart
                  </Link>
                  <Link to="/" onClick={onClick}>
                    update cart
                  </Link>
                </div>
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
                        <td>$32</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handling</td>
                        <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td>$32</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="checkout-action">
                <Link to="/checkout" className="fag-btn">
                  Proceed to checkout <span />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Cart;
