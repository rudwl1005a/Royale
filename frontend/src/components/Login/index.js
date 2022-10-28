import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../../img/login-avatar.png";

import "./style.css";

function Login(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="page-404 section--full-bg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-404__wrap">
                <div className="login-wrapper">
                  <img className="login_user" src={avatar} alt="login user" />
                  <h3>Account Login</h3>
                  <form>
                    <div className="form-row">
                      <input type="text" placeholder="Username or Email" />
                    </div>
                    <div className="form-row">
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="form-row" />
                    <div className="form-row">
                      <button className="fag-btn" type="submit">
                        Login to your Account!
                      </button>
                    </div>
                  </form>
                  <div className="socials-wrapper">
                    <p>Login with your Social Account</p>
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick} className="facebook">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="twitch">
                          <FaTwitch />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="youtube">
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
