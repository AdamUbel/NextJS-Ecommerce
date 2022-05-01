import React from "react";

import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Project Shop - Made With React</p>
      <p className="icons">
        <AiOutlineInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
