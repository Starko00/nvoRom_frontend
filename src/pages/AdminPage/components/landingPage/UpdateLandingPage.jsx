import React, { useState, useEffect } from "react";
import EditLandingPageStyle from "./EditArticleStyle.module.scss";
import axios from "axios";

const UpdateLandingPage = () => {
  const style = EditLandingPageStyle;
  const [heroTittleMain, setHeroTittleMain] = useState("");
  const [heroShortText, setHeroShortText] = useState("");
  const [ourTeamText, setOurTeamText] = useState("");
  const [visionAndMissionText, setVisionAndMissionText] = useState("");
  const [visionAndMissionTittle, setVisionAndMissionTittle] = useState("");
  const [data, setData] = useState([]);
  const [id, setID] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("/phiramenca/api/v1/landing/landingpage");
      const landingData = res.data[0]; // Assuming the API returns a single object
      setData(landingData);
      setHeroTittleMain(landingData.heroTittleMain);
      setHeroShortText(landingData.heroShortText);
      setOurTeamText(landingData.ourtTeamText);
      setVisionAndMissionText(landingData.visionAndMissionText);
      setVisionAndMissionTittle(landingData.visionAndMissionTittle);
      setID(landingData._id);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = async () => {
    try {
      await axios.patch("/phiramenca/api/v1/landing/landingpageupdate", {
        _id: id,
        heroTittleMain: heroTittleMain,
        heroShortText: heroShortText,
        ourtTeamText: ourTeamText,
        visionAndMissionText: visionAndMissionText,
        visionAndMissionTittle: visionAndMissionTittle,
      });
      console.log("Article updated successfully!");
      window.location.reload(); 
    } catch (error) {
      console.log("Error updating the article:", error);
    }
  };

  return (
    <div className={style.container}>
      <table>
        <tbody>
          <tr>
            <th>Tittle Main</th>
            <th>Short Text</th>
            <th>Team Text</th>
          </tr>
          <tr>
            <td>
              <textarea
                value={heroTittleMain}
                onChange={(e) => setHeroTittleMain(e.target.value)}
              />
            </td>
            <td>
              <textarea
                value={heroShortText}
                onChange={(e) => setHeroShortText(e.target.value)}
              />
            </td>
            <td>
              <textarea
                value={ourTeamText}
                onChange={(e) => setOurTeamText(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th>Vision And Mission Tittle</th>
            <th>Vision And Mission Text</th>
          </tr>
          <tr>
            <td>
              <textarea
                value={visionAndMissionTittle}
                onChange={(e) => setVisionAndMissionTittle(e.target.value)}
              />
            </td>
            <td>
              <textarea
                value={visionAndMissionText}
                onChange={(e) => setVisionAndMissionText(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button className={style.button} onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default UpdateLandingPage;
