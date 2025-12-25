import "dotenv/config";
import { prisma } from "@/lib/utils/prisma";
import sampleData from "./sample-data";

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });

  console.log("Database seded successfully!");
}

main();
