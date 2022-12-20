import Footer from "./components/FooterComponent/Footer";
import NavBar from "./components/NavigationBarComponent/NavigationBar";
import "./style/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePageComponent/HomePage";
import AboutUsPage from "./pages/AboutUsPageComponent/AboutUsPage";
import ProjectsPage from "./pages/ProjectsPageComponent/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
