import React, { useEffect, useState } from "react";
import "../../style/App.scss";
import About from "../../components/AboutComponent/About";
import Hero from "../../components/HeroComponent/Hero";
import News from "../../components/NewsComponent/News";
import Partners from "../../components/PartnersComponent/Partners";
import Project from "../../components/ProjectComponent/Project";
import Team from "../../components/TeamComponent/Team";
import axios from "axios";
const HomePage = () => {
  const [homePageData, setHomePageData] = useState();
  useEffect(() => {
    axios
      .get("/phiramenca/api/v1/landing/landingpage")
      .then((res) => {
        setHomePageData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Hero
        heroTittle={homePageData?.heroTittleMain}
        heroText={homePageData?.heroShortText}
      />
      <News />
      <Project />
      <About aboutTittle = {homePageData?.visionAndMissionTittle} aboutText = {homePageData?.visionAndMissionText}/>
      <Team  teamText = {homePageData?.ourtTeamText}/>
      <Partners />
    </div>
  );
};

export default HomePage;
