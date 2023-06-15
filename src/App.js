import Footer from "./components/FooterComponent/Footer";
import NavBar from "./components/NavigationBarComponent/NavigationBar";
import "./style/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePageComponent/HomePage";
import AboutUsPage from "./pages/AboutUsPageComponent/AboutUsPage";
import ProjectsPage from "./pages/ProjectsPageComponent/ProjectsMainPage";
import Project from "./components/ProjectPComponent/PP";
import TeamMainPage from "./components/TeamPComponent/TeamMainPage";
import NewsPage from "./pages/NewsPageComponent/NewsPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { Article } from "./components/NewsPComponent/ArticlePage";
import AddArticle from "./pages/AdminPage/components/article/Article";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Admin from "./pages/AdminPage/Admin";
import DeleteArticle from "./pages/AdminPage/components/article/deleteArticleComponents/DeleteArticle";
import AddImage from "./pages/AdminPage/components/article/addImageComponent/AddImage";
import AddTeamMember from "./pages/AdminPage/components/team/AddTeamMember";
import AddMemberImage from "./pages/AdminPage/components/team/addImage/AddMemberImage";
import DeleteMember from "./pages/AdminPage/components/team/deleteMember/DeleteMember";
import EditMember from "./pages/AdminPage/components/team/updateMember/EditMember";
import EditArticle from "./pages/AdminPage/components/article/editArticleComponent/EditArticle";
import AddProject from "./pages/AdminPage/components/project/AddProject";
import AddProjectImage from "./pages/AdminPage/components/project/addImage/AddProjectImage";
import DeleteProject from "./pages/AdminPage/components/project/deleteProject/DeleteProject";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCbvCpah1DUZ4L4waf4EG1wCaFRKRI8nLE",
    authDomain: "firamenca-final.firebaseapp.com",
    projectId: "firamenca-final",
    storageBucket: "firamenca-final.appspot.com",
    messagingSenderId: "243419115084",
    appId: "1:243419115084:web:46a83b91ad3e2ae2780ee9",
    measurementId: "G-9WJWCT4H81",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
      <div className="app_container">
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutUsPage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/team" element={<TeamMainPage />} />
            <Route exact path="/news" element={<NewsPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/article" element={<Article />} />
            <Route exact path="/admin" element={<Admin />}>
              <Route exact path="add_article" element={<AddArticle />} />
              <Route exact path="add_image" element={<AddImage />} />
              <Route exact path="edit_article" element={<EditArticle />} />
              <Route exact path="delete_article" element={<DeleteArticle />} />
              <Route exact path="add_member" element={<AddTeamMember />} />
              <Route exact path="edit_member" element={<EditMember />} />
              <Route
                exact
                path="add_member_image"
                element={<AddMemberImage />}
              />
              <Route exact path="delete_member" element={<DeleteMember />} />
              <Route exact path="add_project" element={<AddProject />} />
              <Route
              exact
              path="add_project_image"
              element={<AddProjectImage />}
              />
              <Route exact path="delete_project" element={<DeleteProject />} />
            </Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
