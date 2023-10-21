import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../Images/Logo.png";

const Footer = () => {
  return (
    <DIV>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src={logo}
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Health+ is an online fitness website that provides its users different goals that they can select as per their desire.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <Link href="#">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link href="#">Home</Link>
                    </li>
                    <li>
                      <Link href="#">About</Link>
                    </li>
                    <li>
                      <Link href="#">Products</Link>
                    </li>
                    <li>
                      <Link href="#">Join Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don't miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left"></div>
            </div>
          </div>
        </div>
      </footer>
    </DIV>
  );
};

export default Footer;

const DIV = styled.div`
  ul {
    margin: 0px;
    padding: 0px;
  }
  .footer-section {
    background: #151414;
    position: relative;
  }
  .footer-cta {
    border-bottom: 1px solid #373636;
  }
  .single-cta i {
    color: #ff5e14;
    font-size: 30px;
    float: left;
    margin-top: 8px;
  }
  .cta-text {
    padding-left: 15px;
    display: inline-block;
  }
  .cta-text h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 2px;
  }
  .cta-text span {
    color: #757575;
    font-size: 15px;
  }
  .footer-content {
    position: relative;
    z-index: 2;
  }
  .footer-pattern img {
    position: absolute;
    top: 0;
    left: 0;
    height: 330px;
    background-size: cover;
    background-position: 100% 100%;
  }
  .footer-logo {
    margin-bottom: 30px;
  }
  .footer-logo img {
    max-width: 200px;
  }
  .footer-text p {
    margin-bottom: 14px;
    font-size: 14px;
    color: #7e7e7e;
    line-height: 28px;
  }
  .footer-social-icon span {
    color: #fff;
    display: block;
    font-size: 20px;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    margin-bottom: 20px;
  }
  .footer-social-icon a {
    color: #fff;
    font-size: 16px;
    margin-right: 15px;
  }
  .footer-social-icon i {
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 38px;
    border-radius: 50%;
  }
  .facebook-bg {
    background: #3b5998;
  }
  .twitter-bg {
    background: #55acee;
  }
  .google-bg {
    background: #dd4b39;
  }
  .footer-widget-heading h3 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
    position: relative;
  }
  .footer-widget-heading h3::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    height: 2px;
    width: 50px;
    background: #ff5e14;
  }
  .footer-widget ul li {
    display: inline-block;
    float: left;
    width: 50%;
    margin-bottom: 12px;
  }
  .footer-widget ul li a:hover {
    color: #ff5e14;
  }
  .footer-widget ul li a {
    color: #878787;
    text-transform: capitalize;
  }
  .subscribe-form {
    position: relative;
    overflow: hidden;
  }
  .subscribe-form input {
    width: 100%;
    padding: 14px 28px;
    background: #2e2e2e;
    border: 1px solid #2e2e2e;
    color: #fff;
  }
  .subscribe-form button {
    position: absolute;
    right: 0;
    background: #ff5e14;
    padding: 13px 20px;
    border: 1px solid #ff5e14;
    top: 0;
  }
  .subscribe-form button i {
    color: #fff;
    font-size: 22px;
    transform: rotate(-6deg);
  }
  .copyright-area {
    background: #202020;
    padding: 25px 0;
  }
  .copyright-text p {
    margin: 0;
    font-size: 14px;
    color: #878787;
  }
  .copyright-text p a {
    color: #ff5e14;
  }
  .footer-menu li {
    display: inline-block;
    margin-left: 20px;
  }
  .footer-menu li:hover a {
    color: #ff5e14;
  }
  .footer-menu li a {
    font-size: 14px;
    color: #878787;
  }
`;
