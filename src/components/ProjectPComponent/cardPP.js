import React from "react";
import btnStyle from "../../style/Button.module.scss";
import cardStyle from "../../style/projectsCardSmall.module.scss";
import { useNavigate } from "react-router-dom";
import icon from "../../components/images/ic.svg";

export const CardPP = (props) => {
  const navigate = useNavigate()

  const style = cardStyle;
  return (
    <div className={style.card}>
      <div className={style.card_left}>
        <img className={style.card_left_img} src={icon} alt="Logo" />
        <h1 className={style.card_left_header}>{props.card.split('----')[1]}</h1>
        <p className={style.card_left_paragraph}>{props.card.date}</p>
      </div>
      <div className={style.card_right}>
        
        <button className={`${btnStyle} ${style.card_right_button}`} onClick ={()=>{
         window.location.href=`http://20.229.216.236/uploads/projects/${props.card}`
        }}>
          Read More
        </button>
      </div>
    </div>
  );
};


