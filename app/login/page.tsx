export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
        <a href="/" className="text-sm text-gray-600">
          ← Volver al inicio
        </a>

        <h1 className="mt-6 text-3xl font-bold">Iniciar sesión</h1>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Correo electrónico
            </label>

            <input
              type="email"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Contraseña
            </label>

            <input
              type="password"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 px-4 py-3 font-semibold text-white hover:bg-gray-700"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          ¿No tienes una cuenta?{" "}
          <a href="/registro" className="font-semibold text-gray-900">
            Regístrate
          </a>
        </p>
      </div>
    </main>
  );
}