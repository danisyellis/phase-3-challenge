\copy products(name, price, section) FROM './grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers(name)
VALUES
  (
    'Punit'
  );

INSERT INTO shoppers(name)
VALUES
  (
    'Dani'
  );

INSERT INTO shoppers(name)
VALUES
  (
    'Dax'
  );

INSERT INTO shoppers(name)
VALUES
  (
    'Picard'
  );

INSERT INTO shoppers(name)
VALUES
  (
    'Kira Nerys'
  );

INSERT INTO shoppers(name)
VALUES
  (
    'Dr. Julian Bashir'
  );

INSERT INTO orders(shopper_id)
VALUES
  (
    1
  );

INSERT INTO orders(shopper_id)
VALUES
  (
    3
  );

INSERT INTO orders(shopper_id)
VALUES
  (
    1
  );

INSERT INTO orders(shopper_id)
VALUES
  (
    5
  );

INSERT INTO orders(shopper_id)
VALUES
  (
    1
  );

INSERT INTO orders(shopper_id)
VALUES
  (
    5
  );

INSERT INTO orders(shopper_id)
VALUES
  (
    4
  );

INSERT INTO orders_products(product_id, order_id) VALUES (1, 1);
INSERT INTO orders_products(product_id, order_id) VALUES (2, 1);
INSERT INTO orders_products(product_id, order_id) VALUES (3, 1);
INSERT INTO orders_products(product_id, order_id) VALUES (4, 1);
INSERT INTO orders_products(product_id, order_id) VALUES (5, 1);
INSERT INTO orders_products(product_id, order_id) VALUES (6, 2);
INSERT INTO orders_products(product_id, order_id) VALUES (16, 2);
INSERT INTO orders_products(product_id, order_id) VALUES (26, 2);
INSERT INTO orders_products(product_id, order_id) VALUES (36, 2);
INSERT INTO orders_products(product_id, order_id) VALUES (40, 2);
INSERT INTO orders_products(product_id, order_id) VALUES (1, 2);
INSERT INTO orders_products(product_id, order_id) VALUES (5, 2);
INSERT INTO orders_products(product_id, order_id) VALUES (6, 3);
INSERT INTO orders_products(product_id, order_id) VALUES (16, 3);
INSERT INTO orders_products(product_id, order_id) VALUES (26, 3);
INSERT INTO orders_products(product_id, order_id) VALUES (36, 3);
INSERT INTO orders_products(product_id, order_id) VALUES (12, 4);
INSERT INTO orders_products(product_id, order_id) VALUES (6, 4);
INSERT INTO orders_products(product_id, order_id) VALUES (16, 4);
INSERT INTO orders_products(product_id, order_id) VALUES (26, 5);
INSERT INTO orders_products(product_id, order_id) VALUES (7, 6);
INSERT INTO orders_products(product_id, order_id) VALUES (20, 6);
INSERT INTO orders_products(product_id, order_id) VALUES (14, 6);
INSERT INTO orders_products(product_id, order_id) VALUES (22, 6);
INSERT INTO orders_products(product_id, order_id) VALUES (23, 7);
INSERT INTO orders_products(product_id, order_id) VALUES (38, 7);
INSERT INTO orders_products(product_id, order_id) VALUES (29, 7);
INSERT INTO orders_products(product_id, order_id) VALUES (18, 7);
INSERT INTO orders_products(product_id, order_id) VALUES (6, 7);
INSERT INTO orders_products(product_id, order_id) VALUES (16, 7);
INSERT INTO orders_products(product_id, order_id) VALUES (27, 7);
INSERT INTO orders_products(product_id, order_id) VALUES (10, 7);
