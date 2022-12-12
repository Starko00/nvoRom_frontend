import About from "./components/AboutComponent/About";
import Hero from "./components/HeroComponent/Hero";
import NavBar from "./components/NavigationBarComponent/NavigationBar";
import News from "./components/NewsComponent/News";
import Project from "./components/ProjectComponent/Project";
import Team from "./components/TeamComponent/Team";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <News />
      <Project />
      <About />
      <Team />
    </div>
  );
}

export default App;
