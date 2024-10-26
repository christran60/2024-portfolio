import Link from "next/link";

export default function ProjectList({ projects }) {
  return (
    <div className="">
      {projects.map((project, index) => (
        <div key={index}>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block p-3 bg-neutral-950 rounded-lg shadow-md hover:shadow-lg hover:bg-slate-700 transition-all duration-300 group"
          >
            <h1 className="text-md text-white">{project.title}</h1>
            <h2 className="text-sm text-gray-400">{project.description}</h2>
            <div className="absolute top-2 right-2 flex items-center">
              <span className="text-gray-400 transform -rotate-45 transition-transform duration-300">
                &#x276F; {/* Right chevron character */}
              </span>
              <div className="h-0.5 w-0 bg-gray-400 transition-all duration-300 origin-right transform -translate-y-1/2 -rotate-45 -translate-x-1 absolute top-1/2 right-0 group-hover:w-full"></div>
            </div>
          </Link>
          {index < projects.length - 1 && (
            <div className="border-t border-gray-700 mt-2 mb-2"></div>
          )}
        </div>
      ))}
    </div>
  );
}
