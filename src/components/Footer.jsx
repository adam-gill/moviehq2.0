import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <>
      <footer>
        <div className="horizontal-line"></div>
        <div className="logo__text--container">
          <div className="logo__link">
            <img className="logo__img footermod1" src="/film_icon.png" alt="" />
            <p className="logo__text footermod2">Movie HQ</p>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__link">
            <div
              className="footer__anchor link__hover-effect link__hover-effect--white cursor"
              onClick={() => navigate("/")}
            >
              Home
            </div>
          </div>
          <div className="footer__link">
            <div
              className="footer__anchor link__hover-effect link__hover-effect--white cursor"
              onClick={() => navigate("/")}
            >
              Search
            </div>
          </div>
          <div className="footer__link">
            <div className="footer__anchor link__hover-effect link__hover-effect--white no-cursor">
              Contact
            </div>
          </div>
        </div>
        <div className="copyright">Copyright 2024 &copy; Movie HQ</div>
      </footer>
    </>
  );
};


export default Footer;
