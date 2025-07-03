import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Visualizer from "../components/Visualizer";


function Music() {
  return (
    <div className="flex flex-col striped-background">
      <div className="image-gradient layer-blur"></div>
      <Navbar />
      <main className="w-full h-full  md:px-20 max-w-screen-xl mx-auto">
        <div className="h-screen flex justify-center items-center">
            <Visualizer/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Music;
