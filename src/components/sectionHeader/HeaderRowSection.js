function HeaderRowSection({ sectionName, title, description }) {
  return (
    <div>
      {/* Section Name */}
      {sectionName && (
        <p className="mb-2">
          <span className="text-sunsetOrange">{"{"} </span>
          FEATURED WORK
          <span className="text-sunsetOrange"> {"}"}</span>
        </p>
      )}
      {/* Title */}
      {title && (
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Latest Insights
        </h2>
      )}
      {/* Description */}
      {description && (
        <p className="text-gray-400 max-w-3xl">
          Explore my latest projects showcasing creativity, performance, and
          user-focused solutions.
        </p>
      )}
    </div>
  );
}

export default HeaderRowSection;
