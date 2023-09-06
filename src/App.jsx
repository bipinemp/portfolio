import Navbar from "./components/header/navbar";
import Loader from "./components/icons_loaders/loader";
import { useState, useEffect } from "react";
import Hero from "./components/sections/Hero";
import Info from "./components/header/Info";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import Contact from "./components/sections/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Info />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
