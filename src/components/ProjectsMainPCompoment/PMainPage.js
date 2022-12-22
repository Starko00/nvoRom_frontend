import React from "react";
import MainStyle from "./ProjectsMainPage.module.scss";
import SmallCard from "./cardMainSmall";
import BigCard from "./cardMainBig";
import { cardData } from "../../hooks/ProjectsMainPageHook/cardsData";
import { bigCardData } from "../../hooks/ProjectsMainPageHook/bigCardsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Pagination, Navigation } from "swiper";

const PMainPage = () => {
  const style = MainStyle;
  //----------------------------------------------------------------------------------

  const smallCardElements = cardData.map((card) => {
    return <SmallCard card={card} key={card.id} />;
  });

  //----------------------------------------------------------------------------------

  return (
    <div className={style.container}>
      <div className={style.container_leftSide}>
        <h1 className={style.container_leftSide_header}>Projekti:</h1>
        <p className={style.container_leftSide_paragraph}>
          Ukupno 200 projekata
        </p>
        <div className={style.container_smallCard}>{smallCardElements}</div>
      </div>
      <div className={style.container_rightSide}>
        <Swiper
          // slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="Swiper3"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1880: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            2000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            2350: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            3000: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {bigCardData?.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <BigCard card={card} key={card.id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PMainPage;
