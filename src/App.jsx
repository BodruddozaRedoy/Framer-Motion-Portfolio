import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section id="Contact"><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section id="Contact">Contact</section>
    <section id="About">About</section>
  </div>;
};

export default App;
