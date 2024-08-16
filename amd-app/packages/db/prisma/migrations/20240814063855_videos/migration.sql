-- CreateTable
CREATE TABLE "Videos" (
    "id" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Videos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Videos" ADD CONSTRAINT "Videos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
