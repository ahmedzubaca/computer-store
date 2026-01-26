/*
  Warnings:

  - You are about to drop the column `delieredAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `paiAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shipingPrice` on the `Order` table. All the data in the column will be lost.
  - Added the required column `shippingPrice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "delieredAt",
DROP COLUMN "paiAt",
DROP COLUMN "shipingPrice",
ADD COLUMN     "deliveredAt" TIMESTAMP(6),
ADD COLUMN     "paidAt" TIMESTAMP(6),
ADD COLUMN     "shippingPrice" DECIMAL(12,2) NOT NULL;
