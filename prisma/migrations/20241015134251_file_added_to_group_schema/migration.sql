/*
  Warnings:

  - You are about to drop the column `groupFileId` on the `Group` table. All the data in the column will be lost.
  - Added the required column `fileId` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Group" DROP COLUMN "groupFileId",
ADD COLUMN     "fileId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
