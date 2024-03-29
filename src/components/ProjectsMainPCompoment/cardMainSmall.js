import btnStyle from "../../style/Button.module.scss";
import cardStyle from "../../style/projectsCardSmall.module.scss";
import MainStyle from "./ProjectsMainPage.module.scss";
import Logo from "../../components/images/ic.svg"

const cardMainSmall = (props) => {
  const style = MainStyle;
  console.log(props);
  const projectYear = new Date(props.card.projectYear).getFullYear(); // Extract the year from the date string

  return (
    <div className={`${cardStyle.card} ${style.smallCard}`}>
      <div className={cardStyle.card_left}>
        <img
          className={cardStyle.card_left_img}
          src={Logo}
          alt="Logo"
        />
        <p className={`${cardStyle.card_left_paragraph} ${style.cards_date}`}>
          {projectYear}
        </p>
      </div>
      <div className={cardStyle.card_right}>
        <button
          className={`${btnStyle} ${style.smallCard_button}`}
          onClick={() => {
            props.projectYear(props.card.projectYear);
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default cardMainSmall;
