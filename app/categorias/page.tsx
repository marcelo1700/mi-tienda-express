const categories = [
  {
    name: "Electrónica",
    description: "Tecnología, dispositivos y accesorios.",
  },
  {
    name: "Hogar",
    description: "Productos útiles para tu hogar.",
  },
  {
    name: "Moda",
    description: "Ropa, accesorios y complementos.",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <a href="/" className="text-sm text-gray-600 hover:text-black">
          ← Volver al inicio
        </a>

        <h1 className="mt-6 text-4xl font-bold">Categorías</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-xl border bg-white p-8 shadow-sm"
            >
              <h2 className="text-xl font-bold">{category.name}</h2>

              <p className="mt-3 text-gray-600">{category.description}</p>

              <a
                href="/productos"
                className="mt-6 inline-block font-medium"
              >
                Ver productos →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}