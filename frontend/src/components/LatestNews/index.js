import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaEye, FaCommentDots, FaCalendarAlt } from "react-icons/fa";
import blog1 from "../../img/blog-1.jpg";
import blog2 from "../../img/blog-small-1.jpg";
import blog3 from "../../img/blog-small-2.jpg";
import blog4 from "../../img/blog-small-3.jpg";
import "./style.css";

function LatestNews(props) {
  return (
    <>
      <section className="fag-blog-area section_100">
        <div className="top-layer" />
        <div className="bottom-layer" />
        <Container>
          <Row>
            <Col sm={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  Latest <span>news</span>
                </h2>
                <p>
                  blanditiis praesentium voluptatum deleniti atque
                  corrupti.accusamus et iusto odio corrupti.accusamus et iusto
                  odioiusto odio dignissimos ducimus qui blanditiis
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="post-large">
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog1} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Action</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">
                        Gaming computer RXZ-3000 Ultra with revolutionary..
                      </Link>
                    </h3>
                    <p>
                      Morbi volutpat nisi a ligula vestibulum placerat.
                      Suspendisse venenatis pulvinar nibh sed convallis. Cras
                      elementum nunc a purus sodales tincidunt. Duis fringilla
                      quam at tellus ...
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/blog-single">
                          <FaCalendarAlt /> December 9, 2019
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentDots /> 32
                        </Link>
                      </li>
                      <li className="post-fav">
                        <Link to="/blog-single">
                          <FaEye />
                          56
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="post-small">
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog2} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Adventure</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">
                        Willkommen in sintix Eternal Foren
                      </Link>
                    </h3>
                    <p>
                      Morbi volutpat nisi a ligula vestibulum placerat.
                      Suspendisse venenatis pulvinar nibh sed convallis. Cras
                      elementum nunc a purus sodales tincidunt. Duis fringilla
                      quam at tellus ...
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/blog-single">
                          <FaCalendarAlt /> December 9, 2019
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentDots /> 32
                        </Link>
                      </li>
                      <li className="post-fav">
                        <Link to="/blog-single">
                          <FaEye />
                          56
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog3} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Fighting</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">
                        The slayer has entered the facility
                      </Link>
                    </h3>
                    <p>
                      Morbi volutpat nisi a ligula vestibulum placerat.
                      Suspendisse venenatis pulvinar nibh sed convallis. Cras
                      elementum nunc a purus sodales tincidunt. Duis fringilla
                      quam at tellus ...
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/blog-single">
                          <FaCalendarAlt /> December 9, 2019
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentDots /> 32
                        </Link>
                      </li>
                      <li className="post-fav">
                        <Link to="/blog-single">
                          <FaEye />
                          56
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog4} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Racing</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">esports games this weekend</Link>
                    </h3>
                    <p>
                      Morbi volutpat nisi a ligula vestibulum placerat.
                      Suspendisse venenatis pulvinar nibh sed convallis. Cras
                      elementum nunc a purus sodales tincidunt. Duis fringilla
                      quam at tellus ...
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/blog-single">
                          <FaCalendarAlt /> December 9, 2019
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentDots /> 32
                        </Link>
                      </li>
                      <li className="post-fav">
                        <Link to="/blog-single">
                          <FaEye />
                          56
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="load_more text-center">
                <Link to="/blog" className="fag-btn">
                  Explore all
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LatestNews;
