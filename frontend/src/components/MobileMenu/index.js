import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Pages",
    link: "/",
    submenu: [
      {
        id: 21,
        title: "About Us",
        link: "/about",
      },
      {
        id: 22,
        title: "Our Games",
        link: "/games",
      },
      {
        id: 23,
        title: "Games Single",
        link: "/game-single",
      },
      {
        id: 24,
        title: "Matches",
        link: "/match",
      },
      {
        id: 25,
        title: "Matches Single",
        link: "/match-single",
      },
      {
        id: 26,
        title: "404 Error",
        link: "/error",
      },
      {
        id: 27,
        title: "Login",
        link: "/login",
      },
      {
        id: 28,
        title: "Register",
        link: "/register",
      },
    ],
  },
  {
    id: 3,
    title: "News",
    link: "/",
    submenu: [
      {
        id: 31,
        title: "All News",
        link: "/blog",
      },
      {
        id: 32,
        title: "News Single",
        link: "/blog-single",
      },
    ],
  },
  {
    id: 4,
    title: "Store",
    link: "/",
    submenu: [
      {
        id: 41,
        title: "All Products",
        link: "/products",
      },
      {
        id: 42,
        title: "Product Single",
        link: "/product-single",
      },
      {
        id: 43,
        title: "Cart",
        link: "/cart",
      },
      {
        id: 44,
        title: "Checkout",
        link: "/checkout",
      },
    ],
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const [MenuShow, SetMenuShow] = useState(false);
  const [isOpen, setIsOpen] = useState(0);

  return (
    <>
      <div className="responsiveMenu">
        <nav
          id="mobileMenu"
          className={`mobileMenu ${MenuShow ? "active" : ""}`}
        >
          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id} className="has-child">
                  {item.submenu ? (
                    <p
                      onClick={() => setIsOpen(isOpen ? 0 : item.id)}
                      aria-expanded={MenuShow}
                    >
                      {item.title}
                      {item.submenu ? "" : ""}
                    </p>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}

                  {item.submenu ? (
                    <Collapse in={item.id === isOpen}>
                      <ul className="sub-menu">
                        {item.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link className="active" to={submenu.link}>
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`spinner-master ${MenuShow ? "active" : ""}`}
          onClick={() => SetMenuShow(!MenuShow)}
        >
          <div id="spinner-form" className="spinner-spin">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
