"use client";

import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  updateCartQuantity,
  type CartItem,
} from "@/lib/cart";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  function updateQuantity(id: number, quantity: number) {
    updateCartQuantity(id, quantity);
    setCart(getCart());
  }

  function removeItem(id: number) {
    removeFromCart(id);
    setCart(getCart());
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="text-2xl font-bold text-gray-900"
          >
            Mi Tienda Express
          </a>

          <nav className="hidden gap-6 md:flex">
            <a href="/" className="text-gray-700 hover:text-black">
              Inicio
            </a>

            <a
              href="/productos"
              className="text-gray-700 hover:text-black"
            >
              Productos
            </a>

            <a
              href="/categorias"
              className="text-gray-700 hover:text-black"
            >
              Categorías
            </a>

            <a
              href="/carrito"
              className="font-semibold text-black"
            >
              Carrito
            </a>
          </nav>

          <a
            href="/login"
            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Iniciar sesión
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <a
          href="/productos"
          className="text-sm text-gray-600 hover:text-black"
        >
          ← Seguir comprando
        </a>

        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          Tu carrito
        </h1>

        {cart.length === 0 ? (
          <div className="mt-10 rounded-xl border bg-white p-10 text-center">
            <h2 className="text-2xl font-semibold">
              Tu carrito está vacío
            </h2>

            <p className="mt-3 text-gray-600">
              Agrega productos para comenzar tu compra.
            </p>

            <a
              href="/productos"
              className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700"
            >
              Ver productos
            </a>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_350px]">
            <div className="space-y-4">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border bg-white p-6"
                >
                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <div>
                      <h2 className="text-lg font-semibold">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-gray-600">
                        S/ {item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        className="h-9 w-9 rounded border"
                      >
                        -
                      </button>

                      <span className="w-8 text-center">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        disabled={item.quantity >= item.stock}
                        className="h-9 w-9 rounded border disabled:opacity-40"
                      >
                        +
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          removeItem(item.id)
                        }
                        className="ml-3 text-sm text-red-600 hover:text-red-800"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 border-t pt-4 text-right font-semibold">
                    Subtotal: S/{" "}
                    {(item.price * item.quantity).toFixed(2)}
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-xl border bg-white p-6">
              <h2 className="text-xl font-bold">
                Resumen
              </h2>

              <div className="mt-6 flex justify-between">
                <span>Subtotal</span>

                <span>
                  S/ {total.toFixed(2)}
                </span>
              </div>

              <div className="mt-4 flex justify-between border-t pt-4 text-xl font-bold">
                <span>Total</span>

                <span>
                  S/ {total.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-lg bg-gray-900 px-6 py-4 font-semibold text-white hover:bg-gray-700"
              >
                Continuar al checkout
              </button>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}