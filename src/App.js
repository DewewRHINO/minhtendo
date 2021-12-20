import "./App.css";
import { Footer } from "./common_components/Footer";
import { NavBar } from "./common_components/NavBar";
import { WebRoadmap } from "./common_components/WebRoadmap";
import { PageContent } from "./components/PageContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GamesPage } from "./pages/GamesPage";
import { HardwarePage } from "./pages/HardwarePage";
import { NewsPage } from "./pages/NewsPage";
import { HolidayPage } from "./pages/HolidayPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<PageContent />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/hardwares" element={<HardwarePage />} />
          <Route path="/whatsnew" element={<NewsPage />} />
          <Route path="/holiday" element={<HolidayPage />} />
        </Routes>
      </Router>

      <WebRoadmap />
      <Footer />
    </div>
  );
}

export default App;
