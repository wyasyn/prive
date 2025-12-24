const GearList = () => {
  const gear = [
    {
      name: "Canon EOS R6",
      description:
        "My go-to camera for most shoots – fast, sharp, and reliable",
    },
    {
      name: "50mm f/1.2 lens",
      description: "Great for portraits with natural depth and soft background",
    },
    {
      name: "35mm f/1.4 lens",
      description: "Ideal for lifestyle, fashion, and wider framing",
    },
    {
      name: "Manfrotto tripod",
      description: "For still life, long exposures, and locked framing",
    },
    {
      name: "Lightroom",
      description: "My main editing tool – I keep things clean and natural",
    },
    {
      name: "Framer",
      description: "I built this site with it – and I love how flexible it is",
    },
  ];

  return (
    <section className="container py-16 max-w-6xl">
      <h2 className="text-4xl font-bold mb-12">Gear and tools I use</h2>
      <div className="space-y-4">
        {gear.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-border last:border-0"
          >
            <h3 className="text-lg font-medium mb-2 md:mb-0 md:w-1/3">
              {item.name}
            </h3>
            <p className="text-muted-foreground md:w-2/3 md:text-right">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GearList;
