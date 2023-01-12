import { useLocation } from "react-router-dom";
import articleStyle from "./articleStyle.module.css";
import { smallCardsData } from "../../hooks/NewsHook/smallCardsData";
import ArticleCard from "./ArticleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation } from "swiper";
export const Article = () => {
  const location = useLocation();
  console.log(location.state);
  const style = articleStyle;
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <div className={style.imgHolder}>
          <img
            src={`http://20.229.216.236/uploads/news/${location.state.photo}`}
            alt="article"
          />{" "}
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
          modules={[Navigation]}
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
          {smallCardsData?.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <ArticleCard card={card} key={card.id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={style.rightContainer}>
        <h1>{location.state.hedline}</h1>
        <p>{location.state.content}</p>
        <div className={style.tagHolder}>
          {location.state.tags.map((tag) => {
            return <p className={style.tags}>#{tag}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
