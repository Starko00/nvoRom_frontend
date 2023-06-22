import { useState, useEffect } from "react";
import AddImageStyle from "./AddImageStyle.module.scss";
import axios from "axios";

const AddImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const style = AddImageStyle;

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

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", selectedOption);
      formData.append("article", selectedImage);

      axios
        .post("/phiramenca/api/v1/news/articlePhoto", formData)
        .then((res) => console.log(res));
      console.log("Image posted successfully!");
      window.location.reload();
      getData();
    } catch (error) {
      console.log("Error posting the image:", error);
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
                {item.hedline}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.right}>
        <h2>Image Upload</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".jpg,.jpeg,.png" // Allow JPG, JPEG, and PNG images
            onChange={handleImageChange}
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default AddImage;
