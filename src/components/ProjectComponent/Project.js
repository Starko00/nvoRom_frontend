import React, { useState, useEffect } from "react";
import ProjectStyle from "../ProjectComponent/Project.module.scss";
import ProjectCard from "./ProjectCard";
import { cardData } from "../../hooks/ProjectHook/ProjectCardsData";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";

const Project = () => {
  const style = ProjectStyle;
  const [projectInYear, setProjectInYear] = useState("2022");

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("/phiramenca/api/v1/projects", {
        yearFilter: "2022",
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [projectInYear]);
  console.log(projectInYear);
  console.log();
  return (
    <div className={style.container}>
      <h1 className={style.container_header}>Izdvojeni projekti</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="Swiper1"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          875: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1380: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          2300: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {data?.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <ProjectCard
                card={card}
                key={card.id}
                projectYear={setProjectInYear}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Project;
