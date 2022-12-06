import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { Helmet } from "react-helmet";


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Evan's Portfolio</title>
      </Helmet>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />

    </div>
  );
}

export default App;