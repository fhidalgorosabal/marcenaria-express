export interface CardType {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  className?: string;
}

export interface CartStore {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
