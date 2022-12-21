import React from "react";
import PPStyle from "./ProjectPage.module.scss";
import img from "../images/Image_6.png";
import btnStyle from "../../style/Button.module.scss";
import Card from "./cardPP";
import { cardData } from "../../hooks/ProjectPageHook/cardsData";
import Text from "./PPText";

const ProjectPage = () => {
  const style = PPStyle;
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
        <Text />
        <div className={style.container_rightSide_btncontainer}>
          <button
            className={`${btnStyle} ${style.container_rightSide_btncontainer_button}`}
          >
            Ostali Projekti
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
