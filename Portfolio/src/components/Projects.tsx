interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  status?: "in-progress" | "completed";
}

const projects: Project[] = [
  {
    title: "Cooperative Pathfinding AI",
    description:
      "A Python-based recreation of David Silver’s Cooperative A* algorithm for multi-agent pathfinding, with support for simulation and visualization.",
    technologies: [
      "Python",
      "Jupyter Notebook",
      "Matplotlib/PyQtGraph",
      "OpenGL",
    ],
    githubUrl: "https://github.com/ryjimen/Cooperative_A-Star_Pathfinding",
    imageUrl: "../../public/pathfinding.png",
    status: "completed",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-3 text-left "
    >
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 back ">
        {projects.map((project) => (
          <div className="card bg-base-100 w-90% shadow-sm bg-stone-700">
            <figure>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full max-h-[200px] object-cover"
                
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-start">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-emerald-700 text-blue-600 dark:text-zinc-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-ghost w-full hover:bg-emerald-300 hover:text-stone-900">
                  <p>Github</p>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
