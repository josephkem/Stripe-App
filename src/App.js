import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MainSection from "./components/main-section/MainSection";
import FeaturedCollection from "./components/featured-collection/FeaturedCollection";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <FeaturedCollection />
    </div>
  );
}

export default App;
