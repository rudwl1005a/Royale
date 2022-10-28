import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import "./style.css";

function PreOrder(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-preorder-area">
        <div className="preorder-inn">
          <Container>
            <Row>
              <div className="col-12 text-center">
                <div className="preorder-box">
                  <p>release in 10 days</p>
                  <h3>
                    SteamWorld Quest <span>Hand of Gilgamech</span>
                  </h3>
                  <Link to="/" onClick={onClick} className="fag-btn-outline">
                    Pre-Order Now!
                  </Link>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default PreOrder;
