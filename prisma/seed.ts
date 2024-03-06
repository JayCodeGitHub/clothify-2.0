const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: 'password',
      purchaseHistory: {
        create: [
          {
            items: {
              create: [
                { title: 'Jersey Sleeveless Maxi Dress', price: 55, size: 'm', quantity: 2 },
                { title: 'Olive chino pants', price: 55, size: 'xl', quantity: 2 },
                { title: 'Grey wool Charles coat in Prince of Wales check', price: 450, size: 's', quantity: 1 },
              ],
            },
            fullName: 'John Smith',
            email: '',
            address: '',
            country: '',
            cardName: '',
            cardNumber: '',
            cardDate: '',
            cardCvv: '',
          },
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