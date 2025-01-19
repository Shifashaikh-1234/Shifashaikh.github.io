
import "./App.scss";
import { Routes, Route} from "react-router-dom";
import ParticlesComponent from "./utils.js/particles";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";

function App() {


return (
    <div className="App">
      {/* particles js */}

      
        <ParticlesComponent id="particles" />
      

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
