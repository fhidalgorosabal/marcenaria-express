import { DataAboutUs } from "../../data/about-us";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {DataAboutUs.title}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {DataAboutUs.description}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-flow-col gap-8 auto-cols-max">
          {DataAboutUs.values.map((value) => (
            <div className="group relative">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <img
                  src={value.image}
                  alt={value.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-800/80 rounded-full p-4 text-center">
                  <h3 className="text-white font-semibold">{value.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
