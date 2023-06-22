import { useEffect, useState } from "react";
import DeleteProjectStyle from "./DeleteProjectStyle.module.scss";
import axios from "axios";

const DeleteProject = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState("");
  const style = DeleteProjectStyle;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const getData = async () => {
    const res = await axios.get("/phiramenca/api/v1/projects");
    setData(res.data.projectList);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOption);
    try {
      axios
        .delete("/phiramenca/api/v1/getproject", {
          _id: selectedOption,
        })
        .then((res) => console.log(res));
      window.location.reload();
      getData();
    } catch (error) {
      console.log("Error posting the image:", error);
    }
  };
  return (
    <div className={style.container}>
      <div>
        <h1>Select</h1>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          {Object.values(data).map((item) => {
            return (
              <option key={item._id} value={item._id}>
                {item.projectName}
              </option>
            );
          })}
        </select>
        <form onSubmit={handleSubmit}>
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
};

export default DeleteProject;
