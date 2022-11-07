import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import { signUpApi } from "../../api/api";

function Register(props) {
  const [userEmail, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userPhone, setPhone] = useState("");

  const handleSubmit = (event) => {
    // alert({ userEmail });
    const UserCreateRequest = {
      userEmail,
      userName,
      userPassword,
      userPhone,
    };
    signUpApi(UserCreateRequest);
    console.log(UserCreateRequest);
    event.preventDefault();
  };

  return (
    <>
      <div className="page-404 section--full-bg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-404__wrap">
                <div className="login-wrapper">
                  <h3>Create Account</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <input
                        type="email"
                        placeholder="UserEmail"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="text"
                        placeholder="UserName"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="password"
                        placeholder="userPassword"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="tel"
                        placeholder="userTel"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <button className="fag-btn" type="submit">
                        Create your Account!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Register;
