import { useNavigate } from "react-router-dom";
import { useCart, useTranslation } from "../../hooks";
import { FaMinus, FaPlus } from "react-icons/fa";
import { formatPrice } from "../../utils";
import Button from "../../components/common/Button";

const Cart = () => {
  const { translate } = useTranslation();
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleBuyNowClick = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      <h1 className="text-3xl font-bold mb-8">
        {translate("cart-page-title")}
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">{translate("cart-page-message")}</p>
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
                    <FaMinus />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    variant="secondary"
                    size="sm"
                    className="min-w-[32px] h-8 flex items-center justify-center"
                  >
                    <FaPlus />
                  </Button>
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="danger"
                  size="sm"
                >
                  {translate("delete-button")}
                </Button>
              </div>
            </div>
          ))}

          <div className="mt-8 text-right">
            <p className="text-xl font-bold">{`${translate(
              "total"
            )}: ${formatPrice(total)}`}</p>
            <Button size="md" className="mt-4" onClick={handleBuyNowClick}>
              {translate("buy-now")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
