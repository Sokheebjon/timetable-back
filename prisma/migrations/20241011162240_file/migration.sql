/*
  Warnings:

  - You are about to drop the column `name` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `File` table. All the data in the column will be lost.
  - You are about to alter the column `size` on the `File` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - A unique constraint covering the columns `[url]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mimeType` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orginalName` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "name",
DROP COLUMN "path",
ADD COLUMN     "mimeType" TEXT NOT NULL,
ADD COLUMN     "orginalName" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "size" SET DATA TYPE INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "File_url_key" ON "File"("url");
