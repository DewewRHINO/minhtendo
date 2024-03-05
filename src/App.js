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
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [navHeight, setNavHeight] = useState(0);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    // page loading logic
    window.onload = () => {
      setTimeout(() => {
        document.getElementsByClassName("PageLoading")[0].style.display =
          "none";
        [...document.getElementsByClassName("scroll-off")].forEach(() => {
          document
            .getElementsByClassName("scroll-off")[0]
            .classList.remove("scroll-off");
        });
      }, 1500);
    };
    console.log("Please refresh the page if you're resizing the browser.");
    console.log("Mounted App.");
    setViewportWidth(window.innerWidth);
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
      <div
        className="d-block d-md-none App scroll-off"
        style={{ paddingTop: "55px" }}
      >
        <NavBar
          innerRef={navRef}
          openSearch={openSearch}
          setOpenSearch={setOpenSearch}
          viewportWidth={viewportWidth}
          setViewportWidth={setViewportWidth}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/whatsnew" element={<NewsPage />} />
        </Routes>
        <WebRoadmap viewportWidth={viewportWidth} />
        <Footer />
      </div>
      <div
        className="d-none d-md-block App scroll-off"
        style={{ paddingTop: navHeight }}
      >
        <NavBar
          innerRef={navRef}
          openSearch={openSearch}
          setOpenSearch={setOpenSearch}
          viewportWidth={viewportWidth}
          setViewportWidth={setViewportWidth}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/hardwares" element={<HardwarePage />} />
          <Route path="/whatsnew" element={<NewsPage />} />
          <Route path="/holiday" element={<HolidayPage />} />
        </Routes>
        <WebRoadmap viewportWidth={viewportWidth} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
