import Footer from "./components/FooterComponent/Footer";
import NavBar from "./components/NavigationBarComponent/NavigationBar";
import "./style/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePageComponent/HomePage";
import AboutUsPage from "./pages/AboutUsPageComponent/AboutUsPage";
import ProjectsPage from "./pages/ProjectsPageComponent/ProjectsMainPage";
import Project from "./components/ProjectPComponent/PP";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutUsPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/project" element={<Project />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
