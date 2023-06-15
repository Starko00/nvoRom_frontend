import React from "react";
import { useState, useEffect } from "react";
import EditArticleStyle from "./EditArticleStyle.module.scss";
import axios from "axios";

const EditArticle = () => {
  const style = EditArticleStyle;
  const [hedline, setHedline] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([""]);
  const [content, setContent] = useState("");
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

  const handleClick = async () => {
    try {
      await axios
        .patch("/phiramenca/api/v1/news/singleArticle", {
          id: selectedOption,
          hedline: hedline,
          author: author,
          tags: tags,
          content: content,
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
        <h1>Select Article To Edit</h1>
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
      <table>
        <tbody>
          <tr>
            <th>Headline</th>
            <th>Author</th>
            <th>Tags</th>
            <th>Content</th>
          </tr>
          <tr>
            <td>
              <textarea
                onChange={(e) => {
                  setHedline(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                onChange={(e) => {
                  setTags([e.target.value]);
                }}
              />
            </td>
            <td>
              <textarea
                type="text-area"
                onChange={(e) => {
                  setContent(e.target.value);
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

export default EditArticle;
