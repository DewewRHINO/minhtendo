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
import { useEffect, useRef, useState } from "react";

function App() {
  let prevScroll = 0;
  const navRef = useRef();
  const [navHeight, setNavHeight] = useState(0);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    console.log("Mounted App.");
    setNavHeight(
      `${parseFloat(getComputedStyle(navRef.current).height) - 5}px`
    );
  }, []);

  useEffect(() => {
    console.log("Re-rendering App.");
  });

  useEffect(() => {
    document.addEventListener("scroll", handleNavToggle);
    return () => {
      document.removeEventListener("scroll", handleNavToggle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSearch]);

  const handleNavToggle = () => {
    if (!openSearch) {
      if (prevScroll > window.scrollY) {
        navRef.current.classList.add("toggle-nav-in");
      } else if (prevScroll < window.scrollY) {
        navRef.current.classList.remove("toggle-nav-in");
      }
      prevScroll = window.scrollY;
    }
  };

  return (
    <Router>
      <div className="App" style={{ paddingTop: navHeight }}>
        <NavBar
          innerRef={navRef}
          openSearch={openSearch}
          setOpenSearch={setOpenSearch}
        />
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
