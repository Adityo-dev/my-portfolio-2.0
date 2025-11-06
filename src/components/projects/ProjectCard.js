import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div className="group bg-gray-900 rounded-lg overflow-hidden shadow-sm transition-all duration-300 border border-gray-800 hover:border-sunsetOrange/60 flex flex-col h-full">
      {/* Project Image */}
      <div className="relative h-52 md:h-72 w-full overflow-hidden">
        <Image
          src={project?.img}
          alt={project?.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status Badge */}
        <div className="absolute top-3 -right-1">
          <span
            className={`px-3 py-1 rounded-s-[10px] text-xs font-medium capitalize backdrop-blur-sm ${
              project?.status?.toLowerCase() === "completed"
                ? "bg-green-500"
                : project?.status?.toLowerCase() === "live"
                ? "bg-blue-500"
                : project?.status?.toLowerCase() === "practice"
                ? "bg-red-500"
                : "bg-yellow-500"
            }`}
          >
            {project?.status}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 flex-1 flex flex-col">
        {project?.notes && (
          <div className="mb-3 p-2 bg-yellow-500/20 text-yellow-400 text-xs rounded">
            ⚠️ {project.notes}
          </div>
        )}

        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white">{project?.title}</h3>
          <span className="text-nowrap text-sm text-gray-400">
            {project?.completionDate}
          </span>
        </div>

        <p className="text-gray-300 mb-4 flex-1">{project?.desc}</p>

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
              {/* icon svg */}
            </Link>
            <Link
              href={`https://github.com/${project.githubUrl}`}
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              Code
              {/* icon svg */}
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
