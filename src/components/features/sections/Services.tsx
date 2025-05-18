import { ServicesDataType } from "../../../types/ServicesDataType";
import "../../../assets/styles/services.css";

import servicesData from "../../../data/services.json";

const Services = () => {
  const services: ServicesDataType = servicesData;

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="services-bg w-full h-full bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full py-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {services.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.services.map((service) => (
            <div
              key={service.name}
              className="group bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.name}
              </h3>
              <p className="text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
