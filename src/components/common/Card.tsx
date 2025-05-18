import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../lib/utils";
import { CardType } from "../../types/CardType";
import Button from "./Button";

const Card = ({
  id,
  title,
  description,
  imageUrl,
  price,
  className = "",
}: CardType) => {
  const { addToCart } = useCart();
  const shortDescription =
    description && description?.length > 40
      ? `${description.substring(0, 40)}...`
      : description;

  const handleAddToCart = () => {
    addToCart({ id, title, imageUrl, price });
  };

  return (
    <div
      className={`w-full h-full rounded-lg overflow-hidden relative group ${className}`}
    >
      <div className="poster w-full h-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-all duration-600 group-hover:brightness-50"
        />
      </div>
      <div className="info absolute bottom-0 bg-gradient-to-t from-black/50 to-transparent h-[200px] w-full flex flex-col justify-end p-2.5">
        <h3 className="font-bold text-lg text-gray-300 mb-1.5">{title}</h3>
        <div className="hidden-content opacity-0 h-0 transition-all duration-600 group-hover:opacity-100 group-hover:h-[100px]">
          <p className="text-xs text-gray-200 mt-1">{shortDescription}</p>
          <p className="text-sm font-bold text-white mt-1">
            {formatPrice(price)}
          </p>
          <Button
            className="mt-4"
            variant="secondary"
            size="lg"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
