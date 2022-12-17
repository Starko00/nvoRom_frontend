import React from "react";
import Card from "./Card";
import { cardData } from "../../hooks/PartnersHook/cardsData";
import PartnersStyle from "../../style/Partners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import BreakPoints from "./BreakPoints";
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
          className="mySwiper Swiper2"
          BreakPoints
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
