import { useState, useEffect } from "react";
import EditMemberStyle from "./EditMemberStyle.module.scss";
import axios from "axios";

const EditMember = () => {
  const style = EditMemberStyle;
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [biography, setBiography] = useState("");
  const [selectedUser, setSelectedUser] = useState();
  const [socialMediaLinkedIn, setSocialMediaLinkedIn] = useState(
    "https://www.linkedin.com/"
  );
  const [socialMediaInstagram, setSocialMediaInstagram] = useState(
    "https://www.instagram.com/"
  );
  const [socialMediaFacebook, setSocialMediaFacebook] = useState(
    "https://www.facebook.com/"
  );
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handleUserSelection(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/phiramenca/api/v1/team/members");
      setData(response.data.allMembers);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUserSelection = async (userId) => {
    axios
      .post("/phiramenca/api/v1/team/teamMember", {
        id: userId,
      })
      .then((res) => setSelectedUser(res.data));
  };
  useEffect(() => {
    if (selectedUser) {
      Object.values(selectedUser).map(
        (user) => (
          setName(user?.name),
          setPosition(user?.position),
          setBiography(user?.biography),
          setSocialMediaLinkedIn(user?.socialMediaLinkedIn),
          setSocialMediaInstagram(user?.socialMediaInstagram),
          setSocialMediaFacebook(user?.socialMediaFacebook)
        )
      );
    }
  }, [selectedUser]);

  const handleClick = async () => {
    try {
      await axios.patch("/phiramenca/api/v1/team/members", {
        data: {
          socialMediaLinkedIn,
          socialMediaInstagram,
          socialMediaFacebook,
          biography,
          position,
          name,
        },
        id: selectedOption,
      });
      console.log("Member updated successfully!");
      window.location.reload();
    } catch (error) {
      console.log("Error updating the member:", error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.container_left}>
        <h1>Select</h1>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          {data.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Biography</th>
          </tr>
          <tr>
            <td>
              <textarea
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                value={position}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                value={biography}
                onChange={(e) => {
                  setBiography(e.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th>FaceBook</th>
            <th>Instagram</th>
            <th>LinkedIn</th>
          </tr>
          <tr>
            <td>
              <textarea
                value={socialMediaFacebook}
                placeholder="https://www.facebook.com/"
                onChange={(e) => {
                  setSocialMediaFacebook(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                value={socialMediaInstagram}
                placeholder="https://www.instagram.com/"
                onChange={(e) => {
                  setSocialMediaInstagram(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                value={socialMediaLinkedIn}
                placeholder="https://www.linkedin.com/"
                onChange={(e) => {
                  setSocialMediaLinkedIn(e.target.value);
                }}
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

export default EditMember;
