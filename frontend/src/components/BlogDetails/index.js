import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaAngleRight,
  FaCalendar,
  FaCommentAlt,
  FaEye,
  FaSearch,
} from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import blog1 from "../../img/blog-1.jpg";
import blog2 from "../../img/blog-2.jpg";
import blog3 from "../../img/blog-3.jpg";
import blogs1 from "../../img/blog-small-1.jpg";
import blogs2 from "../../img/blog-small-2.jpg";
import blogs3 from "../../img/blog-small-3.jpg";
import author1 from "../../img/4.jpg";
import author2 from "../../img/5.jpg";

import "./style.css";

function BlogDetails(props) {
  return (
    <>
      <section className="fag-news-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="post-large blog-details">
                <div className="blog-item">
                  <div className="blog-image">
                    <img src={blog1} alt="blog" />
                  </div>
                  <div className="blog-text">
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/">
                          <FaCalendar /> December 9, 2019
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/">
                          <FaCommentAlt /> 32
                        </Link>
                      </li>
                      <li className="post-fav">
                        <Link to="/">
                          <FaEye />
                          56
                        </Link>
                      </li>
                    </ul>
                    <h3>Gaming computer RXZ-3000 Ultra with revolutionary.</h3>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and prai.craft beer labore wes
                      anderson cred nesciunt sapiente ea proident. Ad vegan
                      excepteur butcher vice lomo. Leggings occaecat craft beer.
                      Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar
                      nisi. In dapibus urna sit amet accumsan tristique. Donec
                      odio ligula, luctus venenatis varius id, tincidunt ac
                      ipsum. Cras commodo, velit nec aliquam dictum, tortor
                      velit dictum ipsum, sed ornare nunc leo nec ipsum.
                    </p>
                    <p>
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                    <div className="blog-inner-image">
                      <Row>
                        <Col sm={6}>
                          <div className="destination-desc-img">
                            <img src={blog2} alt="gallery 1" />
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="destination-desc-img">
                            <img src={blog3} alt="gallery 1" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                    <blockquote>
                      Cillum aute nisi sunt quis duis. Ad anim non velit nulla
                      elit est excepteur proident excepteur laboris. Elit
                      consectetur culpa enim aliquip tempor.
                    </blockquote>
                    <p>
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                {/*/.end blog item*/}
                <div className="fag-comment-list">
                  <div className="comment-group-title">
                    <h3>Comments (03)</h3>
                  </div>
                  <div className="single-comment-item">
                    <div className="single-comment-box">
                      <div className="main-comment">
                        <div className="author-image">
                          <img src={author1} alt="author" />
                        </div>
                        <div className="comment-text">
                          <div className="comment-info">
                            <h4>david kamal</h4>
                            <ul>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                            </ul>
                            <p>4 minitues ago</p>
                          </div>
                          <div className="comment-text-inner">
                            <p>
                              Ne erat velit invidunt his. Eum in dicta veniam
                              interesset, harum lupta definitionem. Vocibus
                              suscipit prodesset vim ei, equidem perpetua eu
                              per.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-box comment_reply">
                      <div className="main-comment">
                        <div className="author-image">
                          <img src={author2} alt="author" />
                        </div>
                        <div className="comment-text">
                          <div className="comment-info">
                            <h4>Jerix Ablin</h4>
                            <ul>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                            </ul>
                            <p>12 minitues ago</p>
                          </div>
                          <div className="comment-text-inner">
                            <p>
                              orem ipsum dolor sit amet, consectetur adipisicing
                              elit. Velit omnis animi et iure laudantium vitae,
                              praesentium optio, sapiente distinctio illo?{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-box">
                      <div className="main-comment">
                        <div className="author-image">
                          <img src={author1} alt="author" />
                        </div>
                        <div className="comment-text">
                          <div className="comment-info">
                            <h4>david kamal</h4>
                            <ul>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                              <li>
                                <AiFillStar />
                              </li>
                            </ul>
                            <p>4 minitues ago</p>
                          </div>
                          <div className="comment-text-inner">
                            <p>
                              Ne erat velit invidunt his. Eum in dicta veniam
                              interesset, harum lupta definitionem. Vocibus
                              suscipit prodesset vim ei, equidem perpetua eu
                              per.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /end comment list */}
                <div className="fag-leave-comment">
                  <h3>Leave a Comment</h3>
                  <form>
                    <Row>
                      <Col lg={6}>
                        <div className="comment-field">
                          <input
                            className="ns-com-name"
                            name="name"
                            placeholder="Name"
                            type="text"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="comment-field">
                          <input
                            className="ns-com-name"
                            name="email"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="comment-field">
                          <textarea
                            className="comment"
                            placeholder="Comment..."
                            name="comment"
                            defaultValue={""}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="comment-field">
                          <button type="submit" className="fag-btn">
                            post comment <span />
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                {/* /end comment form */}
              </div>
            </Col>
            <Col lg={4}>
              <div className="sidebar-widget">
                <div className="news-sidebar-item">
                  <form>
                    <input type="search" placeholder="Search..." />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>
                <div className="news-sidebar-item">
                  <h3>Categories</h3>
                  <ul className="categories">
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Adventure
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Racing
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Fighting
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Strategy
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Survival
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaAngleRight />
                        Horror
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="news-sidebar-item">
                  <h3>Recent Post</h3>
                  <ul className="recent-blog">
                    <li>
                      <div className="recent-img">
                        <Link to="/blog-single">
                          <img src={blogs1} alt="img" />
                        </Link>
                      </div>
                      <div className="recent-text">
                        <h4>
                          <Link to="/blog-single">
                            Hot Marketing Trends You Need to Implement
                          </Link>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="recent-img">
                        <Link to="/blog-single">
                          <img src={blogs2} alt="img" />
                        </Link>
                      </div>
                      <div className="recent-text">
                        <h4>
                          <Link to="/blog-single">
                            Tips To Reduce Your Travel Costs
                          </Link>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="recent-img">
                        <Link to="/blog-single">
                          <img src={blogs3} alt="img" />
                        </Link>
                      </div>
                      <div className="recent-text">
                        <h4>
                          <Link to="/blog-single">
                            Hashtag Effectively In Social Media
                          </Link>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="recent-img">
                        <Link to="/blog-single">
                          <img src={blogs2} alt="img" />
                        </Link>
                      </div>
                      <div className="recent-text">
                        <h4>
                          <Link to="/blog-single">
                            Hot Marketing Trends You Need to Implement
                          </Link>
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="news-sidebar-item">
                  <h3>Archive</h3>
                  <ul className="categories">
                    <li>
                      <Link to="/blog">
                        <FaAngleRight />
                        August 2019 <span>(29)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <FaAngleRight />
                        July 2019 <span>(12)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <FaAngleRight />
                        June 2019 <span>(22)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <FaAngleRight />
                        May 2019 <span>(11)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <FaAngleRight />
                        April 2019 <span>(12)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default BlogDetails;
