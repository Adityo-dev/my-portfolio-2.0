function HeaderRowSection({ sectionName, title, description }) {
  return (
    <div>
      {/* Section Name */}
      {sectionName && (
        <p className="mb-2">
          <span className="text-sunsetOrange">{"{"} </span>
          {sectionName}
          <span className="text-sunsetOrange"> {"}"}</span>
        </p>
      )}
      {/* Title */}
      {title && (
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h2>
      )}
      {/* Description */}
      {description && <p className="text-gray-400 max-w-3xl">{description}</p>}
    </div>
  );
}

export default HeaderRowSection;
