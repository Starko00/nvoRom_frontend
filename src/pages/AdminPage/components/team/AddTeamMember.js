import axios from "axios";
import { useState } from "react";
import AddTeamMemberStyle from "./AddTeamMemberStyle.module.scss";

const AddTeamMember = () => {
  const style = AddTeamMemberStyle;
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [biography, setBiography] = useState("");
  const [socialMediaLinkedIn, setSocialMediaLinkedIn] = useState(
    "https://www.linkedin.com/"
  );
  const [socialMediaInstagram, setSocialMediaInstagram] = useState(
    "https://www.instagram.com/"
  );
  const [socialMediaFacebook, setsocialMediaFacebook] = useState(
    "https://www.facebook.com/"
  );
  const handleClick = async () => {
    try {
      await axios
        .post("/phiramenca/api/v1/team/members", {
          name: name,
          position: position,
          biography: biography,
          socialMediaFacebook: socialMediaFacebook,
          socialMediaInstagram: socialMediaInstagram,
          socialMediaLinkedIn: socialMediaLinkedIn,
        })
        .then((res) => console.log(res));

      console.log("Article posted successfully!");
      window.location.reload();
    } catch (error) {
      console.log("Error posting the article:", error);
    }
  };
  return (
    <div className={style.container}>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Biography</th>
            <th>FaceBook</th>
            <th>Instagram</th>
            <th>LinkedIn</th>
          </tr>
          <tr>
            <td>
              <textarea
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                onChange={(e) => {
                  setBiography(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                placeholder="https://www.facebook.com/"
                type="text-area"
                onChange={(e) => {
                  setsocialMediaFacebook(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                placeholder="https://www.instagram.com/"
                type="text-area"
                onChange={(e) => {
                  setSocialMediaInstagram(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                placeholder="https://www.linkedin.com/"
                type="text-area"
                onChange={(e) => {
                  setSocialMediaLinkedIn(e.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className={style.button} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default AddTeamMember;
