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
import { useEffect, useState } from "react";

function App() {
  let prevScroll = window.scrollY;
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleNavToggle);
    return () => {
      document.removeEventListener("scroll", handleNavToggle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("Re-rendering the app.");
  });

  const handleNavToggle = () => {
    console.log(
      "Last scroll was: ",
      prevScroll,
      "Current scroll is: ",
      window.scrollY
    );
    if (prevScroll > window.scrollY) {
      setGoingUp(true);
    } else if (prevScroll < window.scrollY) {
      setGoingUp(false);
    }
    prevScroll = window.scrollY;
  };

  return (
    <Router>
      <div className="App">
        {goingUp && <NavBar />}
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
