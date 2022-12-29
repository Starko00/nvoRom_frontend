import React from "react";
import NewsPCards from "../../components/NewsPComponent/NewsPCards";
import NewsCardNewsPage from "../../components/NewsCardN/NewsCardNewsPage";
import PageStyle from "./NewsPage.module.scss";
import { NCNData } from "../../hooks/NewsHook/NCNData";

const NewsPage = () => {
  const style = PageStyle;
  const cardData = NCNData.map((card) => {
    return <NewsCardNewsPage card={card} key={card.id} />;
  });

  return (
    <div className={style.main}>
      <NewsPCards />
      {cardData}
    </div>
  );
};

export default NewsPage;
