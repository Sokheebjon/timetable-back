-- CreateTable
CREATE TABLE "EducationForm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "allowed_courses" INTEGER[],

    CONSTRAINT "EducationForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationDirection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "allowed_courses" INTEGER[],

    CONSTRAINT "EducationDirection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "course" INTEGER NOT NULL,
    "educationFormId" TEXT NOT NULL,
    "educationDirectionId" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_educationFormId_fkey" FOREIGN KEY ("educationFormId") REFERENCES "EducationForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_educationDirectionId_fkey" FOREIGN KEY ("educationDirectionId") REFERENCES "EducationDirection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
