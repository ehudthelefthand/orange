/*
  Warnings:

  - You are about to drop the column `mobile` on the `Customer` table. All the data in the column will be lost.
  - Added the required column `contactNumber` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopName` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "mobile",
ADD COLUMN     "contactNumber" TEXT NOT NULL,
ADD COLUMN     "nickName" TEXT,
ADD COLUMN     "shopName" TEXT NOT NULL,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL;
