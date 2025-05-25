import { ProductsDataType } from "../../types";
import { Footer } from "../../components/layout";
import Card from "../../components/common/Card";

import productsData from "../../data/products.json";

const Products = () => {
  const products: ProductsDataType[] = productsData;

  return (
    <>
      <div className="min-h-screen bg-gray-100 pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Nuestros Productos
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="h-[400px]">
                <Card
                  id={product.id}
                  title={product.name}
                  description={product.description}
                  imageUrl={product.image}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
