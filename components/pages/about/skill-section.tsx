const SkillsSection = () => {
  const skills = [
    "Portrait Photography",
    "Fashion Photography",
    "Commercial Photography",
    "Natural Light",
    "Studio Lighting",
    "Photo Editing",
    "Lightroom",
    "Color Grading",
    "Creative Direction",
    "Brand Photography",
    "Editorial Work",
    "Digital Retouching",
  ];

  return (
    <section className="container py-16 max-w-6xl">
      <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-muted px-6 py-4 rounded-lg text-center font-medium hover:bg-muted/70 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
