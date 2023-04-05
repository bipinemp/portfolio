import Navbar from "./components/navbar";
import Loader from "./components/loader";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Info from "./components/Info";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
