import { formatPrice } from "../../lib/utils";
import Button from "../../components/common/Button";
import { DataProducts } from "../../data/products";

const Products = () => {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Nuestros Productos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DataProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">
                  {formatPrice(product.price)}
                </span>
                <Button variant="success" size="sm">
                  Agregar al carrito
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
