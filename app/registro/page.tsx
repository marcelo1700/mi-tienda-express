export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
        <a href="/" className="text-sm text-gray-600">
          ← Volver al inicio
        </a>

        <h1 className="mt-6 text-3xl font-bold">Crear cuenta</h1>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">Nombre</label>

            <input
              type="text"
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Correo electrónico
            </label>

            <input
              type="email"
              className="w-full rounded-lg border px-4 py-3"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Contraseña
            </label>

            <input
              type="password"
              className="w-full rounded-lg border px-4 py-3"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 px-4 py-3 font-semibold text-white hover:bg-gray-700"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </main>
  );
}