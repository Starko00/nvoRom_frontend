import { useState, useEffect } from "react";
import AddProjectStyle from "./AddProjectStyle.module.scss";
import axios from "axios";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AddProject = () => {
  const style = AddProjectStyle;
  const [projectName, setProjectName] = useState("");
  const [secodnaryText, setSecodnaryText] = useState("");
  const [primaryText, setPrimaryText] = useState("");
  const [projectYear, setProjectYear] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  //---------------------------------------------------------------

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await axios.get("/phiramenca/api/v1/projects");
    setData(res.data.projectList);
  };
  useEffect(() => {
    getData();
  }, []);
  //----------------------------------------------------------------------
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOption);
    try {
      const formData = new FormData();
      formData.append("id", selectedOption);
      formData.append("document", selectedFile);

      axios
        .post("/phiramenca/api/v1/projectFiles", formData)
        .then((res) => console.log(res));
      console.log("File posted successfully!");
      window.location.reload();
      getData();
    } catch (error) {
      console.log("Error posting the image:", error);
    }
  };
  //----------------------------------------------------------------------

  const handleClick = async () => {
    try {
      await axios
        .post("/phiramenca/api/v1/createPorject", {
          projectName: projectName,
          secodnaryText: JSON.stringify(secodnaryText),
          primaryText: primaryText,
          projectYear: projectYear,
        })
        .then((res) => console.log(res));
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
            <th>Project Name</th>
            <th>Secondary Text</th>
            <th>Project Year</th>
          </tr>
          <tr>
            <td>
              <textarea
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
              />
            </td>
            <td>
              <textarea
                onChange={(e) => {
                  setSecodnaryText(e.target.value);
                }}
              />
            </td>

            <td>
              <input
                type="text"
                onChange={(e) => {
                  setProjectYear(e.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th>Primary Text</th>
          </tr>
          <tr>
            <td>
              <Editor
                editorState={editorState}
                onEditorStateChange={(e) => {
                  setEditorState(e);
                  setPrimaryText(
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
      <div className={style.container_left}>
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
          <input type="file" onChange={handleFileChange} />
          <button className={style.button} type="submit">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
