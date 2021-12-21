import "./App.css";
import { Footer } from "./common_components/Footer";
import { NavBar } from "./common_components/NavBar";
import { WebRoadmap } from "./common_components/WebRoadmap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GamesPage } from "./pages/GamesPage";
import { HardwarePage } from "./pages/HardwarePage";
import { NewsPage } from "./pages/NewsPage";
import { HolidayPage } from "./pages/HolidayPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/hardwares" element={<HardwarePage />} />
          <Route path="/whatsnew" element={<NewsPage />} />
          <Route path="/holiday" element={<HolidayPage />} />
        </Routes>
        <WebRoadmap />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
