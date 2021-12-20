import "./App.css";
import { Footer } from "./common_components/Footer";
import { NavBar } from "./common_components/NavBar";
import { WebRoadmap } from "./common_components/WebRoadmap";
import { PageContent } from "./components/PageContent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PageContent />
      <WebRoadmap />
      <Footer />
    </div>
  );
}

export default App;
