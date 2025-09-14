"use client";

function SkillsCard({ item, activeSkill, setActiveSkill }) {
  return (
    <div
      className={`bg-gray-900 p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:border-sunsetOrange/30 cursor-pointer ${
        activeSkill === item?.id ? "ring-2 ring-sunsetOrange" : ""
      }`}
      onClick={() => setActiveSkill(activeSkill === item?.id ? null : item?.id)}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-2xl mb-2">{item.icon}</div>
          <h3 className="text-xl font-semibold">{item.name}</h3>
        </div>
        <span className="text-sunsetOrange font-medium text-lg">
          {item.level}%
        </span>
      </div>

      <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
        <div
          className="bg-gradient-to-r from-sunsetOrange to-orange-400 h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${item.level}%` }}
        ></div>
      </div>

      {(activeSkill === item?.id || window.innerWidth > 768) && (
        <div className="mt-4">
          <p className="text-gray-400 text-sm mb-2">{item.description}</p>
          <div className="flex items-center text-sm text-sunsetOrange">
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
            {item.projects}
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsCard;
