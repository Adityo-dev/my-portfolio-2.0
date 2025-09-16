function ServicesCard({ item, activeService, setActiveService }) {
  return (
    <div
      className={`bg-gray-900 p-4 rounded-xl border border-gray-800 transition-all duration-300 cursor-pointer group ${
        activeService === item?.id
          ? "border-sunsetOrange/50 ring-2 ring-sunsetOrange/20"
          : "hover:border-sunsetOrange/30"
      }`}
      onClick={() =>
        setActiveService(activeService === item?.id ? null : item?.id)
      }
    >
      <div className="flex items-start justify-between mb-6">
        <div className="text-sunsetOrange p-3 rounded-lg bg-sunsetOrange/10">
          {item.icon}
        </div>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            activeService === item?.id
              ? "bg-sunsetOrange text-white rotate-45"
              : "bg-gray-800 text-gray-400 group-hover:bg-sunsetOrange/20 group-hover:text-sunsetOrange"
          }`}
        >
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 group-hover:text-sunsetOrange transition-colors duration-300">
        {item?.serviceName}
      </h3>
      <p className="text-gray-400">{item?.description}</p>

      <div className="mt-4 pt-4 border-t border-gray-800 flex items-center text-sm text-sunsetOrange">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
            clipRule="evenodd"
          />
        </svg>
        View case studies
      </div>
    </div>
  );
}

export default ServicesCard;
