import { ROUTES } from "../../lib/constants";
import Button from "../../components/common/Button";
import Banner from "../../components/common/Banner";

const Home = () => {
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
