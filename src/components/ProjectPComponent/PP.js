import PPStyle from "./ProjectPage.module.scss";
import btnStyle from "../../style/Button.module.scss";
import { CardPP } from "./CardPP";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const ProjectPage = () => {
  const style = PPStyle;
  const location = useLocation();
  const [project, setProject] = useState("");
  useEffect(() => {
    axios
      .post("http://20.229.216.236/phiramenca/api/v1/getproject", {
        _id: location.state.projectId,
      })
      .then((res) => {
        setProject(res.data.project);
      });
  }, []);

  const cardElements = project?.documentation?.map((documentation) => {
    return <CardPP card={documentation} key={documentation} />;
  });
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.container_leftSide}>
        {project.projectImg ? (
          <img
            className={style.container_leftSide_img}
            src={`http://20.229.216.236/uploads/projects/${project?.projectImg}`}
            alt="About_img"
          />
        ) : (
          "No project img"
        )}
        <h1 className={style.container_leftSide_header}>Dokumentacija:</h1>
        <div className={style.container_leftSide_card}>
          {" "}
          {project?.documentation && project.documentation?.length !== 0
            ? cardElements
            : "No documentation available"}
        </div>
      </div>

      <div className={style.container_rightSide}>
        <h1 className={style.container_rightSide_header}>
          {project.projectName}
        </h1>
        <p className={style.container_rightSide_paragraph}>
          {project.primaryText}
        </p>
        <div className={style.container_rightSide_btncontainer}>
          <button
            type="buttons"
            onClick={() => {
              navigate("/projects");
            }}
            className={`${btnStyle} ${style.container_rightSide_btncontainer_button}`}
          >
            Ostali Projekti
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
