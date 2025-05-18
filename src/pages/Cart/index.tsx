import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../lib/utils";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      <h1 className="text-3xl font-bold mb-8">Carro de Compras</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{formatPrice(item.price)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 text-right">
            <p className="text-xl font-bold">Total: {formatPrice(total)}</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Proceder al pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
