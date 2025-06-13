import { GithubIcon, LinkedinIcon } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-3 text-left"
    >
      <div className="p-8">
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full border-4 border-white  shadow-blue-100 overflow-hidden">
          <img src="/IMG_1240.jpg" alt="Profile" className=" " />
        </div>
      </div>

      <div className="ml-5px max-w-4xl mx-auto z-10 space-y-3">
        {/* Name */}
        <h1 className="text-3xl sm:text-4xl font-extrabold ">
          <span className="text-gradient">Rylan Jimenez</span>
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-xl text-gray-600 dark:text-gray-300">
          Full Stack Developer • He/Him
        </h2>

        {/* Introduction */}
        <p className="text-base text-left sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg ">
          Hello, welcome to my portfolio! I’m a full stack developer based in
          Virginia Beach, VA. I build user-friendly web apps with a focus on
          usability and responsiveness, blending creativity and code to deliver
          impactful products.
        </p>
      </div>
      <div className="flex flex-row justify-between space-x-3 mt-4">
        <a
          href="https://github.com/ryjimen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-ghost btn-square hover:bg-emerald-300 hover:text-stone-900">
            <GithubIcon />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/r-jimen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-ghost btn-square hover:bg-emerald-300 hover:text-stone-900">
            <LinkedinIcon />
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
