import { useState, useEffect } from "react";
import ArticleStyle from "./ArticleStyle.module.scss";
import axios from "axios";
const Article = () => {
  const style = ArticleStyle;
  const [hedline, setHedline] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([""]);
  const [content, setContent] = useState("");
  

  
  const handleClick = async () => {
    try {
      await axios
        .post("/phiramenca/api/v1/news/article", {
          hedline,
          author,
          tags,
          content,
        })
        .then((res) => console.log(res));

      console.log("Article posted successfully!");
    } catch (error) {
      console.log("Error posting the article:", error);
    }
  };

  return (
    <div className={style.container}>
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

export default Article;
