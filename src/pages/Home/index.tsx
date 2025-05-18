import { ROUTES } from "../../lib/constants";
import Button from "../../components/common/Button";
import Banner from "../../components/common/Banner";
import AboutUs from "../../components/sections/AboutUs";
import Services from "../../components/sections/Services";
import Footer from "../../components/layout/Footer";

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
