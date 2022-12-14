import React from "react";
import FooterStyle from "../../style/Footer.module.scss";

const Footer = () => {
  const style = FooterStyle;
  return (
    <footer className={style.container}>
      <h1>
        Powerd by With<span>Us</span>
      </h1>
    </footer>
  );
};

export default Footer;
