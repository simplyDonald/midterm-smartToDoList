DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) ,
  password VARCHAR(255),
  first_name VARCHAR(255) ,
  last_name VARCHAR(255) ,
  birth_date DATE 
);
