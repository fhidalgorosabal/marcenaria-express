import { ROUTES } from "../../constants";
import { Footer } from "../../components/layout";
import { Button, Banner } from "../../components/common";
import { AboutUs, Services } from "../../components/features";
import { useTranslation } from "../../hooks";

const Home = () => {
  const { translate } = useTranslation();
  return (
    <>
      <Banner
        title={translate("home-page-title")}
        content={translate("home-page-subtitle")}
      >
        <Button
          variant="outline"
          size="md"
          onClick={() => (window.location.href = ROUTES.PRODUCTS)}
        >
          {translate("see-products")}
        </Button>
      </Banner>

      <AboutUs />

      <Services />

      <Footer />
    </>
  );
};

export default Home;
