import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div className="group bg-gray-900 rounded-lg overflow-hidden shadow-sm transition-all duration-300 border border-gray-800 hover:border-sunsetOrange/60">
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project?.img}
          alt={project?.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project?.status === "Completed"
                ? "bg-green-500/20 text-green-400"
                : project?.status === "Live"
                ? "bg-blue-500/20 text-blue-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {project?.status}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white">{project?.title}</h3>
          <span className="text-sm text-gray-400">
            {project?.completionDate}
          </span>
        </div>

        <p className="text-gray-300 mb-4">{project?.desc}</p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project?.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-auto">
          <div className="flex gap-3">
            <Link
              href={project?.liveUrl}
              target="_blank"
              className="text-sunsetOrange font-semibold hover:text-orange-300 transition-colors flex items-center gap-1"
            >
              Live Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href={project?.githubUrl}
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              Code
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <Link
            href={`/projects/${project?.id}`}
            className="px-4 py-2 bg-sunsetOrange/10 text-sunsetOrange rounded-md hover:bg-sunsetOrange hover:text-white transition-colors text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
