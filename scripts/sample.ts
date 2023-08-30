import { PrismaClient } from "@prisma/client";

const data = new PrismaClient();

async function main() {
  try {
    await data.companion.createMany({
      data: [
        {
            userId: "user-35666273bwskj",
            userName: "john_doe",
            src: "https://example.com/images/john.jpg",
            name: "John Doe",
            description: "A passionate explorer of nature and wildlife.",
            instructions: "Follow these steps to get started...",
            seed: "abcd1234",
            categoryId: "64edc356a963c0233a1341ad"
          }
          
      ],
    });
  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await db.$disconnect();
  }
}

main();