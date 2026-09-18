export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

const CART_KEY = "mi-tienda-express-cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(CART_KEY);

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(item: CartItem) {
  const cart = getCart();

  const existing = cart.find(
    (product) => product.id === item.id
  );

  if (existing) {
    existing.quantity = Math.min(
      existing.quantity + item.quantity,
      existing.stock
    );
  } else {
    cart.push(item);
  }

  saveCart(cart);
}

export function removeFromCart(id: number) {
  const cart = getCart().filter(
    (item) => item.id !== id
  );

  saveCart(cart);
}

export function updateCartQuantity(
  id: number,
  quantity: number
) {
  const cart = getCart();

  const item = cart.find(
    (product) => product.id === id
  );

  if (!item) {
    return;
  }

  item.quantity = Math.max(
    1,
    Math.min(quantity, item.stock)
  );

  saveCart(cart);
}