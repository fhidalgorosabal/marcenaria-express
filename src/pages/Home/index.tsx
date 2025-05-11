import { ROUTES } from "../../lib/constants";
import Button from "../../components/common/Button";
import Banner from "../../components/common/Banner";
import { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Banner
        title="BIENVENIDO A </br> MARCENARIA EXPRESS"
        content="Descubre nuestra colección de muebles artesanales"
      >
        <Button
          variant="outline"
          size="md"
          onClick={() => (window.location.href = ROUTES.PRODUCTS)}
        >
          Ver Productos
        </Button>
      </Banner>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En Marcenaria Express, nos especializamos en la creación de muebles
            artesanales de alta calidad. Con más de 15 años de experiencia en el
            sector, nuestro equipo de artesanos expertos combina técnicas
            tradicionales con diseños modernos para crear piezas únicas que
            transforman espacios.
          </p>
        </div>

        {/* Values Section with Circular Images */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="group relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80"
                alt="Calidad artesanal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-800/80 rounded-full p-4 text-center">
                <h3 className="text-white font-semibold">Calidad artesanal</h3>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                alt="Diseño personalizado"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-800/80 rounded-full p-4 text-center">
                <h3 className="text-white font-semibold">
                  Diseño personalizado
                </h3>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Materiales sostenibles"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-800/80 rounded-full p-4 text-center">
                <h3 className="text-white font-semibold">
                  Materiales sostenibles
                </h3>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Atención al cliente"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-800/80 rounded-full p-4 text-center">
                <h3 className="text-white font-semibold">
                  Atención al cliente
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Muebles a Medida
              </h3>
              <p className="text-gray-200">
                Diseñamos y fabricamos muebles personalizados según tus
                necesidades y preferencias, asegurando un resultado único y
                funcional.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Restauración
              </h3>
              <p className="text-gray-200">
                Restauramos muebles antiguos devolviéndoles su esplendor
                original, preservando su historia y valor sentimental.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Asesoría en Diseño
              </h3>
              <p className="text-gray-200">
                Ofrecemos consultoría profesional para ayudarte a elegir los
                muebles perfectos para tu espacio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contáctanos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-6">
              ¿Tienes un proyecto en mente? Estamos aquí para ayudarte. Completa
              el formulario y nos pondremos en contacto contigo lo antes
              posible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +123 456 7890
              </div>
              <div className="flex items-center text-gray-600">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contacto@marcenariaexpress.com
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                required
              />
            </div>
            <Button type="submit" variant="primary" size="lg">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
