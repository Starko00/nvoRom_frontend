import { useState, useEffect } from "react";
import ArticleStyle from "./ArticleStyle.module.scss";
import axios from "axios";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Article = () => {
  const style = ArticleStyle;
  const [hedline, setHedline] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([""]);
  const [content, setContent] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleClick = async () => {
    try {
      await axios
        .post("/phiramenca/api/v1/news/article", {
          hedline,
          author,
          tags: tags.split(", ").map((tag) => tag.trim()),
          content,
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
                // editorState={editorState}

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
        Add
      </button>
    </div>
  );
};

export default Article;
