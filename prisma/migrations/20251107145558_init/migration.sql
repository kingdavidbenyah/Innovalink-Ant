/*
  Warnings:

  - You are about to drop the column `attachment_name` on the `contact_submissions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contact_submissions" DROP COLUMN "attachment_name";

-- CreateTable
CREATE TABLE "attachments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "mimeType" TEXT NOT NULL,
    "submissionId" INTEGER NOT NULL,

    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "attachments" ADD CONSTRAINT "attachments_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "contact_submissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
