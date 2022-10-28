import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaAngleRight,
  FaCalendar,
  FaCommentAlt,
  FaEye,
  FaPlay,
  FaSearch,
} from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import blog1 from "../../img/blog-1.jpg";
import blog2 from "../../img/blog-2.jpg";
import blog3 from "../../img/blog-3.jpg";
import blogs1 from "../../img/blog-small-1.jpg";
import blogs2 from "../../img/blog-small-2.jpg";
import blogs3 from "../../img/blog-small-3.jpg";

import "./style.css";

function Blog(props) {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = (e) => {
    setModal(true);
    e.preventDefault();
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-news-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
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
                          <FaCalendar /> December 9, 2019
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentAlt /> 32
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
                {/*/.end blog item*/}
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog2} alt="blog" />
                    </Link>
                    <div
                      onClick={openModal}
                      className="play-video"
                      href="https://www.youtube.com/watch?v=1Q8fG0TtVAY"
                    >
                      <FaPlay />
                    </div>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Adventure</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">
                        Augmented reality (AR) and Virtual Reality (VR) bridge..
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
                          <FaCalendar /> December 9, 2019
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentAlt /> 32
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
                {/*/.end blog item*/}
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog3} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Racing</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">
                        Cosplay afterparty at ESL One Hamburg
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
                          <FaCalendar /> December 9, 2019
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentAlt /> 32
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
                {/*/.end blog item*/}
              </div>
              <div className="pagination-box-row">
                <p>Page 1 of 6</p>
                <ul className="paginations">
                  <li className="active">
                    <Link to="/" onClick={onClick}>
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      3
                    </Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      6
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaAngleRight />
                    </Link>
                  </li>
                </ul>
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
      {modal ? (
        <section className="modal__bg">
          <div className="modal__align">
            <div className="modal__content">
              <span className="closeVideo" onClick={closeModal}>
                <MdClose />
              </span>
              <div className="modal__video-align">
                {videoLoading ? (
                  <div className="modal__spinner">
                    <BiLoaderAlt className="modal__spinner-style" />
                  </div>
                ) : null}
                <iframe
                  className="modal__video-style"
                  onLoad={spinner}
                  loading="lazy"
                  width="800"
                  height="500"
                  src="https://www.youtube.com/embed/3SAuuHCOkyI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Blog;
