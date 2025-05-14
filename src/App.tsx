import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./style.css";
import "./App.css";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <NavBar />
        <main className="main-content">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
