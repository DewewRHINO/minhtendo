import "./App.css";
import { Footer } from "./common_components/Footer";
import { NavBar } from "./common_components/NavBar";
import { WebRoadmap } from "./common_components/WebRoadmap";
import { PageContent } from "./components/PageContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Router>
        <Routes>
          <Route path="/" element={<PageContent />} />
          <Route path="/testing" element={<>This is a testing page.</>} />
        </Routes>
      </Router>

      <WebRoadmap />
      <Footer />
    </div>
  );
}

export default App;
