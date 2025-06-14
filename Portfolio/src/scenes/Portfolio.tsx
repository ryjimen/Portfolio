import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

function Portfolio() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="w-full h-full  md:px-20 max-w-screen-xl mx-auto">
        <div>
          <Hero/>
          <About />
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
