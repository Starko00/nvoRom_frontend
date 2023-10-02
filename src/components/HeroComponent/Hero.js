import React from "react";
import HeroStyle from "./Hero.module.scss";
import ButtonStyle from "../../style/Button.module.scss";
import img from "../images/Slika_Izlozba-min.jpg"
import { useNavigate } from "react-router-dom";

const Hero = ({ heroTittle = "", heroText = "" }) => {
  const style = HeroStyle;
  const navigate = useNavigate();
  return (
    <div className={style.hero}>
      <div className={style.hero_image}>
        <img
          src={img}
          alt="Hero"
        />
      </div>
      <div className={style.hero_text}>
        <h1>{heroTittle}</h1>
        <p>{heroText}</p>
        <div className={style.hero_holder}>
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className={`${ButtonStyle} ${style.hero_holder_button}`}
          >
            Pridruži se
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
