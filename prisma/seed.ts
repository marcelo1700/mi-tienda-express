import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL no está configurada");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const electronica = await prisma.category.upsert({
    where: { name: "Electrónica" },
    update: {},
    create: {
      name: "Electrónica",
      description: "Tecnología, dispositivos y accesorios.",
    },
  });

  const hogar = await prisma.category.upsert({
    where: { name: "Hogar" },
    update: {},
    create: {
      name: "Hogar",
      description: "Productos útiles para tu hogar.",
    },
  });

  const moda = await prisma.category.upsert({
    where: { name: "Moda" },
    update: {},
    create: {
      name: "Moda",
      description: "Ropa, accesorios y complementos.",
    },
  });

  const products = [
    {
      name: "Audífonos Bluetooth",
      description:
        "Audífonos inalámbricos con conexión Bluetooth y excelente calidad de sonido.",
      price: 89.9,
      stock: 25,
      categoryId: electronica.id,
    },
    {
      name: "Smart Watch",
      description:
        "Smart watch moderno para controlar tus actividades y recibir notificaciones.",
      price: 149.9,
      stock: 15,
      categoryId: electronica.id,
    },
    {
      name: "Mochila Urbana",
      description: "Mochila cómoda y resistente para uso diario.",
      price: 79.9,
      stock: 30,
      categoryId: moda.id,
    },
    {
      name: "Lámpara LED",
      description: "Lámpara LED moderna para iluminar tus espacios.",
      price: 49.9,
      stock: 40,
      categoryId: hogar.id,
    },
  ];

  for (const product of products) {
    const existing = await prisma.product.findFirst({
      where: {
        name: product.name,
      },
    });

    if (existing) {
      await prisma.product.update({
        where: {
          id: existing.id,
        },
        data: product,
      });
    } else {
      await prisma.product.create({
        data: product,
      });
    }
  }

  console.log("Base de datos inicializada correctamente.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });