function SkillsSummary({ skills }) {
  return (
    <div className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
      <h3 className="text-2xl font-bold mb-6 text-center">{skills?.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills?.skills.map((skill) => (
          <div key={skill?.id} className="text-center p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-sunsetOrange/20 text-sunsetOrange">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {skill?.svg}
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">{skill?.title}</h4>
            <p className="text-gray-400 text-sm">{skill?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSummary;
