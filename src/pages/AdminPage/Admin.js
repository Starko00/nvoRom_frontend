import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminStyle from "./AdminStyle.module.scss";
import DropdownMenu from "../../components/reusables/DropDown";

const Admin = () => {
  const style = AdminStyle;
  return (
    <div className={style.container}>
      <nav>
        <DropdownMenu label={"Article"}>
          <Link className={style.container_link} to="add_article">
            Add Article
          </Link>
          <Link className={style.container_link} to="add_image">
            Add Image
          </Link>
          <Link className={style.container_link} to="edit_article">
            Edit Article
          </Link>
          <Link className={style.container_link} to="delete_article">
            Delete Article
          </Link>
        </DropdownMenu>
        <DropdownMenu label={"Team"}>
          <Link className={style.container_link} to="add_member">
            Add Member
          </Link>
          <Link className={style.container_link} to="add_member_image">
            Add Image
          </Link>
          <Link className={style.container_link} to="edit_member">
            Edit Member
          </Link>
          <Link className={style.container_link} to="delete_member">
            Delete Member
          </Link>
        </DropdownMenu>
        <DropdownMenu label={"Project"}>
          <Link className={style.container_link} to="add_project">
            Add Project
          </Link>
          <Link className={style.container_link} to="add_project_image">
            Add Project Image
          </Link>
          <Link className={style.container_link} to="delete_project">
            Delete Project
          </Link>
        </DropdownMenu>
        <DropdownMenu label={"Landing Page"}>
          <Link className={style.container_link} to="update_landing_page">
            Update Landing Page
          </Link>
        </DropdownMenu>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
