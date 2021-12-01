INSERT INTO categories (id,name)
VALUES (101,'Films/Series'),
(102,'Restaurants'),
(103,'Books'),
(104,'Shopping'),
(105,'Others');

INSERT INTO items (name,id, user_id, category_id)
VALUES ('Buy Gucci handbags',1, 1,101),
('Watch the red notice movie', 2, 1,102),
('eat at wendy"s', 3, 3,103);

