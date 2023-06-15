import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import articleStyle from "./articleStyle.module.css";
import ArticleCard from "./ArticleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination } from "swiper";
import axios from "axios";

export const Article = () => {
  const location = useLocation();
  const style = articleStyle;
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await axios.get("/phiramenca/api/v1/news");
    setData(res.data);
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <div className={style.imgHolder}>
          <img src={`/uploads/news/${location.state.photo}`} alt="article" />{" "}
        </div>
        <div className={style.authorHolder}>
          <p>
            {location.state.author} |{" "}
            {location.state.date
              .split("T")[0]
              .replaceAll("-", ".")
              .split(".")
              .reverse()
              .join(".")}
          </p>
        </div>
      </div>
      <div className={style.carouselHolder}>
        <Swiper
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="Swiper4"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            820: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1923: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            2500: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            3400: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {data?.allArticles?.map((card, id) => {
            return (
              <SwiperSlide key={id}>
                <ArticleCard card={card} key={id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={style.rightContainer}>
        <h1>{location.state.hedline}</h1>
        <p>{location.state.content}</p>
        <div className={style.tagHolder}>
          {location.state.tags.map((tag, id) => {
            return (
              <p className={style.tags} key={id}>
                #{tag}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
