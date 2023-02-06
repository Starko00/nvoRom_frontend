import React, { useState, useEffect } from "react";
import CardP from "./CardP";
import NewsPStyle from "./NewsP.module.scss";
import SmallPCard from "./SmallPCard";
import axios from "axios";
// Featured set

const NewsP = () => {
  const [data, setData] = useState("");
  const [firstSix, setFirstSix] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://20.229.216.236/phiramenca/api/v1/news");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  //Using slice method to get 6 cards from array
  useEffect(() => {
    setFirstSix(data?.allArticles?.slice(1, 7));
  }, [data]);

  const style = NewsPStyle;

  const firstCard = data.allArticles?.[0];

  const smallCardElements = firstSix?.map((item) => {
    return <SmallPCard key={item._id} card={item} />;
  });

  return (
    <div className={style.container}>
      <h1>Aktuelnosti</h1>
      <div className={style.container_cards}>
        <CardP item={firstCard} />
        {smallCardElements}
      </div>
    </div>
  );
};

export default NewsP;
