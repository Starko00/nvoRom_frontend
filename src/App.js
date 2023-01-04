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

function App() {
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
            <Route exact path="/contact" element={<ContactPage/>}/>
            <Route exact path="/article" element={<Article/>}/>
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
