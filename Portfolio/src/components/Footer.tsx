import { GithubIcon, LinkedinIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="relative w-full text-base-content p-2 bg-zinc-900 flex items-center h-20">
      {/* Left image */}
      <div className="flex items-center ml-2">
        <img
          src="/logo.png"
          alt="logo"
          className="max-h-12 mt-2"
        />
      </div>

      <nav className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
        <div className="flex flex-row space-x-3 mb-1">
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
        <p className="text-sm">Made with ❤️</p>
      </nav>
    </footer>
  );
}

export default Footer;
