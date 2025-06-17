import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <div className="flex flex-col striped-background">
      <div className="image-gradient layer-blur"></div>
      <Navbar />
      <main className="w-full h-full  md:px-20 max-w-screen-xl mx-auto">
        <div>
          <Hero />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
