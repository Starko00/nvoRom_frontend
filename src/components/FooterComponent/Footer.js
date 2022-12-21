import React from "react";
import FooterStyle from "./Footer.module.scss";

const Footer = () => {
  const style = FooterStyle;
  return (
    <footer className={style.container}>
      <h1>
        Powered by With<span>Us</span>
      </h1>
    </footer>
  );
};

export default Footer;
