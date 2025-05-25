import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils";
import { useCart } from "../../hooks";
import { Button } from "../../components/common";
import productsData from "../../data/products.json";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.name,
        imageUrl: product.image,
        price: product.price,
      });
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // TODO: API call
        const data = productsData.find(
          (product) => product.id === Number(id)
        ) as Product;
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800">
          Producto no encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        <div className="w-full md:w-2/5">
          <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-600">{product.description}</p>
          </div>
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            {formatPrice(product.price)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" onClick={handleAddToCart}>
              Agregar al carrito
            </Button>
            <Button variant="secondary" onClick={() => navigate("/products")}>
              Volver a productos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
