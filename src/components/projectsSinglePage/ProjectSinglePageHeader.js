import Link from "next/link";

function ProjectSinglePageHeader({ project }) {
  return (
    <header className="container mx-auto px-3 sm:px-4 pb-6 lg:pb-8">
      <Link
        href="/#projects"
        className="inline-flex items-center text-sunsetOrange hover:text-orange-300 transition-colors mb-4 lg:mb-6 text-sm sm:text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Projects
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words">
            {project.title}
          </h1>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            {project.desc}
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3 w-full md:w-auto justify-start md:justify-end">
          <Link
            href={project.liveUrl}
            target="_blank"
            className="px-3 py-2 sm:px-4 sm:py-2 bg-sunsetOrange text-white rounded-md hover:bg-orange-500 transition-colors flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            Live Demo
          </Link>
          <Link
            href={`https://github.com/${project.githubUrl}`}
            target="_blank"
            className="px-3 py-2 sm:px-4 sm:py-2 border border-gray-700 text-gray-300 rounded-md hover:border-sunsetOrange hover:text-sunsetOrange transition-colors flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            View Code
          </Link>
        </div>
      </div>
    </header>
  );
}

export default ProjectSinglePageHeader;
