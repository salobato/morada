-- CreateTable
CREATE TABLE "properties" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "forecast_start" TIMESTAMP(3) NOT NULL,
    "forecast_end" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "discount" BOOLEAN NOT NULL,
    "itbi" BOOLEAN NOT NULL,
    "registration" BOOLEAN NOT NULL,
    "complex" TEXT NOT NULL,
    "street_type" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);
