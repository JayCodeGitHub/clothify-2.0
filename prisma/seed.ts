const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: 'password',
      purchaseHistory: {
        create: [
          { name: 'default', price: 0, size: 'default', quantity: 0 },
        ],
      },
    },
  });

  console.log('Seed completed:', user);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });