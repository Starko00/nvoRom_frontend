import btnStyle from "../../style/Button.module.scss";
import MainStyle from "./ProjectsMainPage.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const CardMainBig = (props) => {
  const navigate = useNavigate();
  const style = MainStyle;
  console.log(props);
  return (
    <div className={style.card}>
      <div className={style.card_imageHolder}>
        {props.card.projectImg ? (
          <img
            className={style.container_leftSide_img}
            src={`/uploads/projects/${props.card?.projectImg}`}
            alt="About_img"
          />
        ) : (
          "No project img"
        )}
      </div>
      <div className={style.card_container}>
        <div className={style.text}>
          <h1 className={style.text_header}>{props.card.projectName}</h1>
          <p className={style.text_paragraph}>{props.card.secodnaryText}</p>
        </div>
        <div className={style.card_container_button}>
          <button
            type="buttons"
            onClick={() => {
              navigate("/project", { state: { projectId: props.card._id } });
            }}
            className={`${btnStyle} ${style.card_container_button_btn}`}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
