import Hero from "./components/HeroComponent/Hero";
import NavBar from "./components/NavigationBarComponent/NavigationBar";
import News from "./components/NewsComponent/News";
import Project from "./components/ProjectComponent/Project";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <News />
      <Project />
    </div>
  );
}

export default App;
