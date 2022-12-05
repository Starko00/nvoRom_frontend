import React from "react";
import HeroStyle from "../../style/HeroStyle.module.scss";
import ButtonStyle from "../../style/Button.module.scss";
import landing from "../images/hero.png";

const Hero = () => {
  const style = HeroStyle;
  return (
    <div className={style.hero}>
      <div className={style.hero_image}>
        <img src={landing} alt="Hero" />
      </div>
      <div className={style.hero_text}>
        <h1>Koračajte sa nama</h1>
        <h3>PHIREN AMENCA</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className={style.hero_holder}>
          <button className={`${ButtonStyle} ${style.hero_holder_button}`}>
            Pridruži se
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
