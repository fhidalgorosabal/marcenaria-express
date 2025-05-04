import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/constants";
import "../../styles/pages/home.css";

const Home = () => {
  return (
    <div className="relative w-full">
      {/* Banner con imagen de fondo */}
      <div className="bg-banner absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat">
        {/* Overlay semi-transparente para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Contenido centrado sobre el banner */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-5xl font-bold mb-6">
            BIENVENIDO A MARCENARIA EXPRESS
          </h1>
          <p className="text-2xl mb-8">
            Descubre nuestra colección de muebles artesanales
          </p>
          <Link
            to={ROUTES.PRODUCTS}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Ver Productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
