function SkillsSummary() {
  return (
    <div className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Frontend Development Focus
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-4">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-sunsetOrange/20 text-sunsetOrange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Responsive Design</h4>
          <p className="text-gray-400 text-sm">
            Creating layouts that work flawlessly on all device sizes
          </p>
        </div>

        <div className="text-center p-4">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-sunsetOrange/20 text-sunsetOrange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Performance</h4>
          <p className="text-gray-400 text-sm">
            Optimizing for fast load times and smooth interactions
          </p>
        </div>

        <div className="text-center p-4">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-sunsetOrange/20 text-sunsetOrange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">UI/UX Focus</h4>
          <p className="text-gray-400 text-sm">
            Building intuitive interfaces with exceptional user experience
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillsSummary;
