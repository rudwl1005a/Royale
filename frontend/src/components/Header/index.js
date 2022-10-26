import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaSearch, FaTimes } from "react-icons/fa";
import MobileMenu from "../MobileMenu";
import logo from "../../img/logo.png";
import cart from "../../img/shopping-cart.png";
import uk from "../../img/uk.png";
import spain from "../../img/spain.png";
import china from "../../img/china.png";
import russia from "../../img/russia.png";
import admin from "../../img/admin.jpg";

import "./style.css";

function Header(props) {
  const [show, setShow] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  const [state, setstate] = useState(false);
  const changeClass = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setstate(true);
    } else {
      setstate(false);
    }
  };
  window.addEventListener("scroll", changeClass);
  return (
    <>
      <header className={state ? "header-area scroll" : "header-area "}>
        <Container>
          <div className="header-inn d-flex align-items-center justify-content-between">
            <div className="site-logo">
              <Link to="/">
                <img src={logo} alt="img" />
              </Link>
            </div>
            <div className="header-navigation d-flex align-items-center justify-content-between">
              <div className="mainmenu">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="has-sub">
                      <Link to="/" onClick={onClick}>
                        Pages
                      </Link>
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/games">Our Games</Link>
                        </li>
                        <li>
                          <Link to="/game-single">Game Single</Link>
                        </li>
                        <li>
                          <Link to="/match">Matches</Link>
                        </li>
                        <li>
                          <Link to="/match-single">Matches Single</Link>
                        </li>
                        <li>
                          <Link to="/error">404 Error</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">register</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-sub">
                      <Link to="/" onClick={onClick}>
                        News
                      </Link>
                      <ul>
                        <li>
                          <Link to="/blog">All News</Link>
                        </li>
                        <li>
                          <Link to="/blog-single">News Single</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-sub">
                      <Link to="/" onClick={onClick}>
                        Store
                      </Link>
                      <ul>
                        <li>
                          <Link to="/products">All Products</Link>
                        </li>
                        <li>
                          <Link to="/product-single">Product Single</Link>
                        </li>
                        <li>
                          <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right d-flex align-items-center justify-content-between">
                <div className="header-search">
                  <div id="search-trigger" onClick={() => setShow(true)}>
                    <FiSearch />
                  </div>
                </div>
                <div
                  id="search-overlay"
                  className={`block ${show ? "show" : ""}`}
                >
                  <div className="centered">
                    <div id="search-box">
                      <span id="close-btn" onClick={() => setShow(false)}>
                        <FaTimes />
                      </span>
                      <form id="search-form" onSubmit={SubmitHandler}>
                        <input
                          id="search-text"
                          name="q"
                          placeholder="What're you looking for?"
                          type="text"
                        />
                        <button id="search-button" type="submit">
                          <FaSearch />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="header-cart">
                  <Link to="/cart">
                    <img src={cart} alt="shopping cart" />
                    $12.00
                  </Link>
                </div>
                <div className="header-lang">
                  <Link to="/" onClick={onClick}>
                    <img src={uk} alt="uk" />
                    EN
                  </Link>
                  <ul className="lang-menu">
                    <li>
                      <Link to="/" onClick={onClick}>
                        <img src={spain} alt="spain" />
                        <span>SP</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <img src={china} alt="china" />
                        <span>CH</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={russia} alt="russia" />
                        <span>RU</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-auth">
                  <Link to="/" onClick={onClick} className="lang-btn">
                    <img src={admin} alt="admin" />
                    Siman
                  </Link>
                  <ul className="user_menu">
                    <li>
                      <Link to="/" onClick={onClick}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Forums
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Message
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        challenges
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <MobileMenu />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
