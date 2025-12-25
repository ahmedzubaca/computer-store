/*
  Warnings:

  - You are about to drop the column `ratig` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "ratig",
ADD COLUMN     "rating" DECIMAL(3,2) NOT NULL DEFAULT 0;
