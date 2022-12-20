import React from "react";
import aboutUsStyle from "../../style/aboutUs.module.scss";
import Text from "./aboutUsText";
import img from "../images/Logo_2.png";

const aboutUs = () => {
  const style = aboutUsStyle;
  return (
    <div className={style.container}>
      <h1 className={style.container_header}>O nama:</h1>
      <div className={style.container_components}>
        <Text />
        <img className={style.container_components_img} src={img} alt="Logo" />
      </div>
    </div>
  );
};

export default aboutUs;
