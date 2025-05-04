import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-gray-600 mb-4">
        La página que estás buscando no existe.
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
