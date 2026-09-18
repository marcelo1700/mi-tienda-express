const products = [
  {
    id: 1,
    name: "Audífonos Bluetooth",
    price: 89.9,
    category: "Electrónica",
    description:
      "Audífonos inalámbricos con conexión Bluetooth y excelente calidad de sonido.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.9,
    category: "Electrónica",
    description:
      "Smart watch moderno para controlar tus actividades y recibir notificaciones.",
  },
  {
    id: 3,
    name: "Mochila Urbana",
    price: 79.9,
    category: "Moda",
    description:
      "Mochila cómoda y resistente para uso diario.",
  },
  {
    id: 4,
    name: "Lámpara LED",
    price: 49.9,
    category: "Hogar",
    description:
      "Lámpara LED moderna para iluminar tus espacios.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-2xl font-bold text-gray-900">
            Mi Tienda Express
          </a>

          <nav className="hidden gap-6 md:flex">
            <a href="/" className="text-gray-700 hover:text-black">
              Inicio
            </a>

            <a href="/productos" className="font-semibold text-black">
              Productos
            </a>

            <a href="/categorias" className="text-gray-700 hover:text-black">
              Categorías
            </a>

            <a href="/carrito" className="text-gray-700 hover:text-black">
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

      <section className="mx-auto max-w-7xl px-6 py-12">
        <a href="/" className="text-sm text-gray-600 hover:text-black">
          ← Volver al inicio
        </a>

        <div className="mt-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Todos los productos
          </h1>

          <p className="mt-2 text-gray-600">
            Explora nuestro catálogo y encuentra lo que necesitas.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-xl border bg-white shadow-sm"
            >
              <div className="flex h-56 items-center justify-center bg-gray-100">
                <span className="text-gray-400">
                  Imagen del producto
                </span>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                <h2 className="mt-1 text-lg font-semibold text-gray-900">
                  {product.name}
                </h2>

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
      </section>

      <footer className="mt-10 bg-gray-900 text-gray-300">
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