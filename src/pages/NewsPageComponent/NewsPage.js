import React, { useEffect, useState } from "react";
import NewsPCards from "../../components/NewsPComponent/NewsPCards";
import NewsCardNewsPage from "../../components/NewsCardN/NewsCardNewsPage";
import PageStyle from "./NewsPage.module.scss";
import axios from "axios";

const NewsPage = () => {
  const [articleData, setArticleData] = useState();
  useEffect(() => {
    axios
      .get("/phiramenca/api/v1/news")
      .then((res) => setArticleData(res.data.allArticles.reverse()));
  }, []);

  const style = PageStyle;
  const cardData = articleData?.map((card, id) => {
    return <NewsCardNewsPage card={card} key={id} />;
  });
  return (
    <div className={style.main}>
      <NewsPCards />
      {cardData}
    </div>
  );
};

export default NewsPage;
