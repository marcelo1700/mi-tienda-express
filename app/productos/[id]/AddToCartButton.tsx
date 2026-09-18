"use client";

import { useState } from "react";

type AddToCartButtonProps = {
  product: {
    id: number;
    name: string;
    price: number;
    stock: number;
  };
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    console.log("CLICK FUNCIONANDO");
    console.log("PRODUCTO:", product);

    const cartData = localStorage.getItem(
      "mi-tienda-express-cart"
    );

    const cart = cartData ? JSON.parse(cartData) : [];

    const existing = cart.find(
      (item: { id: number }) => item.id === product.id
    );

    if (existing) {
      existing.quantity = Math.min(
        existing.quantity + 1,
        product.stock
      );
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        stock: product.stock,
      });
    }

    localStorage.setItem(
      "mi-tienda-express-cart",
      JSON.stringify(cart)
    );

    console.log("CARRITO GUARDADO:", cart);

    setAdded(true);
  }

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={handleAdd}
        disabled={false}
        className="cursor-pointer rounded-lg bg-gray-900 px-6 py-4 font-semibold text-white hover:bg-gray-700"
      >
        {added
          ? "✓ Agregado al carrito"
          : "Agregar al carrito"}
      </button>

      {added && (
        <p className="mt-3 font-medium text-green-600">
          Producto agregado correctamente.
        </p>
      )}
    </div>
  );
}