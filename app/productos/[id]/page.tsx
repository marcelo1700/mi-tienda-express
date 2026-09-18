import { prisma } from "@/lib/prisma";
import AddToCartButton from "./AddToCartButton";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const productId = Number(id);

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      category: true,
    },
  });

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Producto no encontrado
          </h1>

          <p className="mt-3 text-gray-600">
            No encontramos el producto con ID {id}.
          </p>

          <a
            href="/productos"
            className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 text-white"
          >
            Volver a productos
          </a>
        </div>
      </main>
    );
  }

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
            <a
              href="/"
              className="text-gray-700 hover:text-black"
            >
              Inicio
            </a>

            <a
              href="/productos"
              className="font-semibold text-black"
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
              className="text-gray-700 hover:text-black"
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
          ← Volver a productos
        </a>

        <div className="mt-8 grid gap-10 rounded-xl border bg-white p-8 md:grid-cols-2">
          <div className="flex min-h-[400px] items-center justify-center rounded-xl bg-gray-100">
            <span className="text-gray-400">
              Imagen del producto
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-500">
              {product.category.name}
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-6 text-3xl font-bold text-gray-900">
              S/ {Number(product.price).toFixed(2)}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Stock disponible: {product.stock}
            </p>

            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                price: Number(product.price),
                stock: product.stock,
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}