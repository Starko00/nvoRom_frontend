import React from "react";
import "../../style/App.scss";
import About from "../../components/AboutComponent/About";
import Hero from "../../components/HeroComponent/Hero";
import News from "../../components/NewsComponent/News";
import Partners from "../../components/PartnersComponent/Partners";
import Project from "../../components/ProjectComponent/Project";
import Team from "../../components/TeamComponent/Team";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <News />
      <Project />
      <About />
      <Team />
      <Partners />
    </div>
  );
};

export default HomePage;
