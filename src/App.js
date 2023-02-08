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

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
    measurementId: "G-9WJWCT4H81"
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
