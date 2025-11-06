import Link from "next/link";

function SideBarProjectDetails({ project }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 sticky top-4">
      <h3 className="text-lg sm:text-xl font-bold mb-4">Project Details</h3>
      {/* Show notes if available */}
      {project?.notes && (
        <div className="mb-3 p-2 bg-yellow-500/20 text-yellow-400 text-xs rounded">
          ⚠️ {project.notes}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <p className="text-gray-400 text-xs sm:text-sm">Status</p>
          <p
            className={`font-medium text-sm sm:text-base capitalize ${
              project?.status?.toLowerCase() === "completed"
                ? "text-green-500"
                : project?.status?.toLowerCase() === "live"
                ? "text-blue-500"
                : project?.status?.toLowerCase() === "practice"
                ? "text-red-500"
                : "text-yellow-500"
            }`}
          >
            {project.status}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-xs sm:text-sm">Completion Date</p>
          <p className="font-medium text-sm sm:text-base">
            {project.completionDate}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-xs sm:text-sm">Technologies</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-gray-400 text-xs sm:text-sm">Category</p>
          <p className="font-medium text-sm sm:text-base uppercase">
            {project.type} Project
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
        <h3 className="text-lg sm:text-xl font-bold mb-4">Project Links</h3>
        <div className="space-y-3">
          <Link
            href={project.liveUrl}
            target="_blank"
            className="flex items-center justify-between p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors group text-sm sm:text-base"
          >
            <span>{project.liveUrl ? "Live Website" : "Live Not Allow"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:text-sunsetOrange"
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
            href={`https://github.com/${project.githubUrl}`}
            target="_blank"
            className="flex items-center justify-between p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors group text-sm sm:text-base"
          >
            <span>
              {project.githubUrl
                ? "GitHub Repository"
                : "GitHub Repository Not Allow"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:text-sunsetOrange"
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
      </div>
    </div>
  );
}

export default SideBarProjectDetails;
