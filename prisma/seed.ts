const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: 'password',
      purchaseHistory: {
        create: [
          { name: 'Jersey Sleeveless Maxi Dress', price: 55, size: 'm', quantity: 2 },
          { name: 'Olive chino pants', price: 55, size: 'xl', quantity: 2 },
          { name: 'Grey wool Charles coat in Prince of Wales check', price: 450, size: 's', quantity: 1 },
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