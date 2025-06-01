import { useCart } from "../../hooks";
import { formatPrice } from "../../utils";
import Button from "../../components/common/Button";

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
                  <Button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    variant="secondary"
                    size="sm"
                    disabled={item.quantity <= 1}
                    className="min-w-[32px] h-8 flex items-center justify-center"
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    variant="secondary"
                    size="sm"
                    className="min-w-[32px] h-8 flex items-center justify-center"
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="danger"
                  size="sm"
                >
                  Eliminar
                </Button>
              </div>
            </div>
          ))}

          <div className="mt-8 text-right">
            <p className="text-xl font-bold">Total: {formatPrice(total)}</p>
            <Button variant="primary" size="md" className="mt-4">
              Comprar ahora
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
