import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footerMegaParent text-center">
      <h3 className="">Contact Us</h3>

      <div className="mt-3">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> rbuilder@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faMobileScreen} /> 9898989898
        </p>
      </div>

      <div>
        <h5 className="mt-4">Connect with Us</h5>
        <div className="socialIcons">
          <FontAwesomeIcon className="iconsSocial" icon={faWhatsapp} />
          <FontAwesomeIcon className="iconsSocial" icon={faInstagram} />
          <FontAwesomeIcon className="iconsSocial" icon={faLinkedin} />
        </div>
      </div>

      <p className="mt-4">Designed & built with ❤️ using React</p>
    </div>
  );
};

export default Footer;
