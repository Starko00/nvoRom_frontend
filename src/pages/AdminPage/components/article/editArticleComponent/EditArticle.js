import React, { useState, useEffect } from "react";
import EditArticleStyle from "./EditArticleStyle.module.scss";
import axios from "axios";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditArticle = () => {
  const style = EditArticleStyle;

  const [hedline, setHedline] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(""))
  );
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    const selectedArticle = data.find(
      (item) => item._id === event.target.value
    );
    if (selectedArticle) {
      setHedline(selectedArticle.hedline);
      setAuthor(selectedArticle.author);
      setTags(selectedArticle.tags.join(", "));
      setContent(selectedArticle.content);
      const blocksFromHTML = convertFromHTML(selectedArticle.content);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      )

      setEditorState(
        EditorState.createWithContent(state)
      );
    } else {
      setHedline("");
      setAuthor("");
      setTags("");
      setContent("");
      setEditorState(EditorState.createEmpty());
    }
  };

  const getData = async () => {
    try {
      const res = await axios.get("/phiramenca/api/v1/news");
      setData(res.data.allArticles);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = async () => {
    try {
      await axios.patch("/phiramenca/api/v1/news/singleArticle", {
        id: selectedOption,
        hedline: hedline,
        author: author,
        tags: tags.split(", ").map((tag) => tag.trim()),
        content: content,
      });
      console.log("Article updated successfully!");
      window.location.reload();
    } catch (error) {
      console.log("Error updating the article:", error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.container_left}>
        <h1>Select Article To Edit</h1>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          {data.map((item) => (
            <option key={item._id} value={item._id}>
              {item.hedline}
            </option>
          ))}
        </select>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Headline</th>
            <th>Author</th>
            <th>Tags</th>
          </tr>
          <tr>
            <td>
              <input
                value={hedline}
                onChange={(e) => setHedline(e.target.value)}
              />
            </td>
            <td>
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </td>
            <td>
              <input
                placeholder="tag,⎵tag,⎵tag"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th>Content</th>
          </tr>
          <tr>
            <td>
              <Editor
                editorState={editorState}
                onEditorStateChange={(e) => {
                  setEditorState(e);
                  setContent(
                    draftToHtml(convertToRaw(editorState.getCurrentContent()))
                  );
                }}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
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

export default EditArticle;
