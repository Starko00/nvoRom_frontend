import React, { useEffect, useState } from "react";
import MainStyle from "./ProjectsMainPage.module.scss";
import SmallCard from "./cardMainSmall";
import { CardMainBig } from "./CardMainBig";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination } from "swiper";
import axios from "axios";

const PMainPage = () => {
  const style = MainStyle;
  //----------------------------------------------------------------------------------
  const [projectInYear, setProjectInYear] = useState();
  const [data, setData] = useState();

  const getData = async () => {
    const res = await axios.get("/phiramenca/api/v1/projects");
    setData(res?.data?.projectList);
  };
  useEffect(() => {
    getData();
  }, []);
  const smallCardElements = [];
  const uniqueYears = [];

  data?.forEach((card) => {
    const year = card.projectYear.split("T")[0].split("-")[0];

    if (!uniqueYears.includes(year)) {
      smallCardElements.push(
        <SmallCard card={card} key={card.id} projectYear={setProjectInYear} />
      );
      uniqueYears.push(year);
    }
  });

  const [bigProjectData, setBigProjectData] = useState([]);

  useEffect(() => {
    axios
      .post("/phiramenca/api/v1/projects", {
        yearFilter: projectInYear,
      })
      .then((res) => {
        setBigProjectData(res.data.data);
        console.log(res.data, "Big card data");
      })
      .catch((err) => console.log(err));
  }, [projectInYear]);
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
          spaceBetween={0}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          modules={[Navigation, Pagination]}
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
          {bigProjectData?.map((card) => {
            return (
              <SwiperSlide key={card._id}>
                <CardMainBig card={card} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PMainPage;
