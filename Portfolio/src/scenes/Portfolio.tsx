import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Portfolio() {
  return (
    <div className="flex flex-col striped-background">
      <Navbar />
      <main className="w-full h-full  md:px-20 max-w-screen-xl mx-auto">
        <div>
          <Hero/>
          <Projects/>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
