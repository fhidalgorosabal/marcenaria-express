import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/constants";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          BIENVENIDO A MARCENARIA EXPRESS
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Descubre nuestra colección de muebles artesanales
        </p>
        <Link
          to={ROUTES.PRODUCTS}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ver Productos
        </Link>
      </div>
    </div>
  );
};

export default Home;
