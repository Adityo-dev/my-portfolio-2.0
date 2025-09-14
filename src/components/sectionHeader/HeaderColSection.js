function HeaderColSection({ sectionName, title, description }) {
  return (
    <div className="text-center mb-8 md:mb-10">
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
      {description && (
        <p className="text-gray-400 max-w-3xl mx-auto">{description}</p>
      )}
    </div>
  );
}

export default HeaderColSection;
