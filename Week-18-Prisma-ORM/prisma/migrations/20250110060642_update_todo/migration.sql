-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "tiltle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "user_Id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo_id_key" ON "Todo"("id");
