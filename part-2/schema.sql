CREATE TABLE "shoppers" (
"id"  SERIAL PRIMARY KEY,
"name" TEXT
);

CREATE TABLE "orders" (
"id"  SERIAL PRIMARY KEY,
"shopper_id" INTEGER REFERENCES shoppers (id)
);

CREATE TABLE "products" (
"id"  SERIAL PRIMARY KEY,
"name" TEXT,
"price" DECIMAL,
"section" TEXT
);

CREATE TABLE "orders_products" (
"order_id" INTEGER NOT NULL,
"product_id" INTEGER NOT NULL
);

ALTER TABLE "orders_products" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");
ALTER TABLE "orders_products" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");
