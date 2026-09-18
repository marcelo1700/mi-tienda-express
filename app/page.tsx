const categories = [
  {
    name: "Electrónica",
    description: "Tecnología y accesorios",
    href: "/categorias/electronica",
  },
  {
    name: "Hogar",
    description: "Productos para tu hogar",
    href: "/categorias/hogar",
  },
  {
    name: "Moda",
    description: "Ropa y accesorios",
    href: "/categorias/moda",
  },
];

const products = [
  {
    id: 1,
    name: "Audífonos Bluetooth",
    price: 89.9,
    category: "Electrónica",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.9,
    category: "Electrónica",
  },
  {
    id: 3,
    name: "Mochila Urbana",
    price: 79.9,
    category: "Moda",
  },
  {
    id: 4,
    name: "Lámpara LED",
    price: 49.9,
    category: "Hogar",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-2xl font-bold text-gray-900">
            Mi Tienda Express
          </a>

          <nav className="hidden gap-6 md:flex">
            <a href="/" className="text-gray-700 hover:text-black">
              Inicio
            </a>
            <a href="/productos" className="text-gray-700 hover:text-black">
              Productos
            </a>
            <a href="/categorias" className="text-gray-700 hover:text-black">
              Categorías
            </a>
            <a href="/carrito" className="text-gray-700 hover:text-black">
              Carrito
            </a>
          </nav>

          <div className="flex gap-3">
            <a
              href="/login"
              className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Mi Tienda Express
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Todo lo que necesitas, en un solo lugar.
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Descubre nuestros productos, encuentra lo que buscas y realiza
              tu compra de manera rápida y sencilla.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/productos"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-200"
              >
                Ver productos
              </a>

              <a
                href="/categorias"
                className="rounded-lg border border-gray-600 px-6 py-3 font-semibold hover:bg-gray-800"
              >
                Ver categorías
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Explora nuestras categorías
          </h2>

          <p className="mt-2 text-gray-600">
            Encuentra rápidamente lo que necesitas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="rounded-xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {category.name}
              </h3>

              <p className="mt-2 text-gray-600">{category.description}</p>

              <span className="mt-6 inline-block font-medium text-gray-900">
                Ver categoría →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Productos destacados */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Productos destacados
              </h2>

              <p className="mt-2 text-gray-600">
                Algunos de nuestros productos.
              </p>
            </div>

            <a
              href="/productos"
              className="hidden font-medium text-gray-900 sm:block"
            >
              Ver todos →
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-xl border bg-white shadow-sm"
              >
                <div className="flex h-56 items-center justify-center bg-gray-100">
                  <span className="text-gray-400">Imagen del producto</span>
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-500">{product.category}</p>

                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-xl font-bold text-gray-900">
                    S/ {product.price.toFixed(2)}
                  </p>

                  <a
                    href={`/productos/${product.id}`}
                    className="mt-4 block rounded-lg bg-gray-900 px-4 py-2 text-center font-medium text-white hover:bg-gray-700"
                  >
                    Ver producto
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold text-white">
                Mi Tienda Express
              </h3>

              <p className="mt-3 text-sm">
                Tu tienda online para comprar de forma rápida y sencilla.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Tienda</h3>

              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a href="/productos" className="hover:text-white">
                  Productos
                </a>

                <a href="/categorias" className="hover:text-white">
                  Categorías
                </a>

                <a href="/carrito" className="hover:text-white">
                  Carrito
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white">Cuenta</h3>

              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a href="/login" className="hover:text-white">
                  Iniciar sesión
                </a>

                <a href="/registro" className="hover:text-white">
                  Crear cuenta
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-700 pt-6 text-sm">
            © 2026 Mi Tienda Express. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}