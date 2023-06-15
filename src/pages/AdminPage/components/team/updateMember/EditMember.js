import { useState, useEffect } from "react";
import EditMemberStyle from "./EditMemberStyle.module.scss";
import axios from "axios";

const EditMember = () => {
  const style = EditMemberStyle;
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
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await axios.get("/phiramenca/api/v1/team/members");
    setData(res.data.allMembers);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleClick = async () => {
    try {
      await axios
        .patch("/phiramenca/api/v1/team/members", {
          data: {
            socialMediaLinkedIn: socialMediaLinkedIn,
            socialMediaInstagram: socialMediaInstagram,
            socialMediaFacebook: socialMediaFacebook,
            biography: biography,
            position: position,
            name: name,
          },
          id: selectedOption,
        })
        .then((res) => console.log(res));

      console.log("Article posted successfully!");
    } catch (error) {
      console.log("Error posting the article:", error);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.container_left}>
        <h1>Select</h1>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          {Object.values(data).map((item) => {
            return (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
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

export default EditMember;
