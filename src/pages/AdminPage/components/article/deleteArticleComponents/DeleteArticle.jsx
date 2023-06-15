import { useState, useEffect } from "react";
import DeleteStyle from "./DeleteStyle.module.scss";
import axios from "axios";

const DeleteArticle = () => {
  const style = DeleteStyle;
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await axios.get("/phiramenca/api/v1/news");
    setData(res.data.allArticles);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleClick = () => {
    axios
      .delete("/phiramenca/api/v1/news/singleArticle", {
        data: {
          id: selectedOption,
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <div className={style.container}>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {Object.values(data).map((item) => {
          return (
            <option key={item._id} value={item._id}>
            {item.hedline}
            </option>
          );
        })}
      </select>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default DeleteArticle;
