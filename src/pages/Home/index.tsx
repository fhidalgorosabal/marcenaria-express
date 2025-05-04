import { ROUTES } from "../../lib/constants";
import Button from "../../components/common/Button";
import "../../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="bg-banner absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-screen flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-5xl text-gray-300 font-bold mb-6">
              BIENVENIDO A <br /> MARCENARIA EXPRESS
            </h1>
            <p className="text-2xl text-white mb-8">
              Descubre nuestra colección de muebles artesanales
            </p>
            <Button
              variant="outline"
              size="xl"
              onClick={() => (window.location.href = ROUTES.PRODUCTS)}
            >
              Ver Productos
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, fuga
          doloribus ea, quam eum ipsum rerum praesentium corrupti, asperiores
          facilis ipsam ipsa natus nobis quo. Neque omnis culpa possimus
          voluptatibus!
        </p>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, fuga
          doloribus ea, quam eum ipsum rerum praesentium corrupti, asperiores
          facilis ipsam ipsa natus nobis quo. Neque omnis culpa possimus
          voluptatibus!
        </p>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, fuga
          doloribus ea, quam eum ipsum rerum praesentium corrupti, asperiores
          facilis ipsam ipsa natus nobis quo. Neque omnis culpa possimus
          voluptatibus!
        </p>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, fuga
          doloribus ea, quam eum ipsum rerum praesentium corrupti, asperiores
          facilis ipsam ipsa natus nobis quo. Neque omnis culpa possimus
          voluptatibus!
        </p>
      </div>
    </>
  );
};

export default Home;
