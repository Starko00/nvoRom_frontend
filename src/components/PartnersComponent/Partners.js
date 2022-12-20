import React from "react";
import Card from "./Card";
import { cardData } from "../../hooks/PartnersHook/cardsData";
import PartnersStyle from "../../style/Partners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
SwiperCore.use([Autoplay]);

const Partners = () => {
  const style = PartnersStyle;

  return (
    <div className={style.container}>
      <h1 className={style.container_header}>Partneri</h1>
      <div className={style.container_cards}>
        <Swiper
          slidesPerView="auto"
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loopFillGroupWithBlank={true}
          className="Swiper2"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            280: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            745: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            924: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1470: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1800: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            2300: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {cardData?.map((card) => {
            return (
              <SwiperSlide>
                <Card card={card} key={card.id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
