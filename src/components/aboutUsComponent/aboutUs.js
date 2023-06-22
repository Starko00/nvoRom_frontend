import React, { useState, useEffect } from "react";
import aboutUsStyle from "./aboutUs.module.scss";
import img from "../images/Logo_2.png";
import axios from "axios";

const AboutUs = () => {
  const style = aboutUsStyle;
  const [visionAndMissionText, setVisionAndMissionText] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("/phiramenca/api/v1/landing/landingpage");
      const landingData = res.data[0];
      setVisionAndMissionText(landingData.visionAndMissionText);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={style.container}>
      <h1 className={style.container_header}>O nama:</h1>
      <div className={style.container_components}>
        {visionAndMissionText}
        <img className={style.container_components_img} src={img} alt="Logo" />
      </div>
    </div>
  );
};

export default AboutUs;
