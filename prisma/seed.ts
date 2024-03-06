const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'example@example.com',
      password: 'password',
    },
  });

  const order = await prisma.order.create({
    data: {
          fullName: 'John Smith',
          email: 'example@example.com',
          address: 'Example St 1234, City',
          country: 'United Kingdom',
          cardName: 'John Smith',
          cardNumber: '0000 0000 0000 0000',
          cardDate: '12/26',
          cardCvv: '000',
          items: {
            create: [
              { title: 'Jersey Sleeveless Maxi Dress', price: 55, size: 'm', quantity: 2 },
              { title: 'Olive chino pants', price: 55, size: 'xl', quantity: 2 },
              { title: 'Grey wool Charles coat in Prince of Wales check', price: 450, size: 's', quantity: 1 },
            ],
          },
      }
})
  console.log('Seed completed:', user, order);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
});