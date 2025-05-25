import { ROUTES } from "../../constants";
import { Footer } from "../../components/layout";
import { Button, Banner } from "../../components/common";
import { AboutUs, Services } from "../../components/features";

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

      <AboutUs />

      <Services />

      <Footer />
    </>
  );
};

export default Home;
