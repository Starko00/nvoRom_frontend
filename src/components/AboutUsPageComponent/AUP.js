import React from "react";
import AUPStyle from "../../style/AboutPage.module.scss";
import img from "../images/Image_6.png";
import btnStyle from "../../style/Button.module.scss";
import Card from "./cardAUP";
import { cardData } from "../../hooks/AboutUsPageHook/cardsData";

const AboutUsPage = () => {
  const style = AUPStyle;
  const cardElements = cardData.map((card) => {
    return <Card card={card} key={card.id} />;
  });

  return (
    <div className={style.container}>
      <div className={style.container_leftSide}>
        <img
          className={style.container_leftSide_img}
          src={img}
          alt="About_img"
        />
        <h1 className={style.container_leftSide_header}>Dokumentacija:</h1>
        <div className={style.container_leftSide_card}>{cardElements}</div>
      </div>

      <div className={style.container_rightSide}>
        <h1 className={style.container_rightSide_header}>
          Obrazovanjem do socijalne integracije
        </h1>
        <p className={style.container_rightSide_paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry...….Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.Lorem Ipsum is simply dummy text
          of the printing and typesetting industry...….Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.Lorem Ipsum
          is simply dummy text of the printing and Ipsum is simply dummy text of
          the printing and typesetting industry.Lorem Ipsum is simply dummy text
          of the printing and typesetting industry...….Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.Lorem Ipsum
          is simply dummy text of the printing and typesetting
          industry...….Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.Lorem Ipsum is simply dummy text of the
          printing. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.Lorem Ipsum is simply dummy text of the
          printing and typesetting industry...….Lorem Ipsum is simply dummy text
          of the printing and typesetting industry.Lorem Ipsum is simply dummy
          text of the printing and typesetting industry.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry...….Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.Lorem Ipsum
          is simply dummy text of the printing and typesetting industry.Lorem
          Ipsum is simply dummy text of the printing and Ipsum is simply dummy
        </p>
        <div className={style.container_rightSide_btncontainer}>
          <button
            className={`${btnStyle} ${style.container_rightSide_btncontainer_button}`}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
