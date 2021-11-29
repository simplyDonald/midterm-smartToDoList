const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

//Get a single user from the database given their email.
const getUserWithEmail = function(email) {
  return pool
  .query((`
  SELECT * FROM users
  WHERE email = $1
  `), [email])
  .then(console.log((result) => result.rows[0]))
  .catch((err) => {
    console.log(err.message);
  });
};
exports.getUserWithEmail = getUserWithEmail;

//Get a single user from the database given their id
const getUserWithId = function(id) {
  return pool
  .query((`
  SELECT * FROM users
  WHERE id = $1
  `), [id])
  .then((result) => result.rows[0])
  .catch((err) => {
    console.log(err.message);
  });
}
exports.getUserWithId = getUserWithId;

//add user to database
const addUser =  function(user) {
  const values= [req.body.email,req.body.password,req.body.first_name, req.body.last_name, req.body.birth_date]
  return pool
  .query ((`
    INSERT into users (email, password, first_name, last_name, birth_date)
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *
  `), values)
  .then((result) => console.log(result.rows))
      .catch((err) => {
        console.log(err.message);
      });
  };
  exports.addUser = addUser;

  //add item to database
  const addItem = function(item) {
      //will hardcode category_id now and later replace with function that will get categoryid
      const category_id = 101
      const values = [category_id, req.sessions.user_id, req.body.name]
    return pool
    .query (`INSERT into items (category_id, user_id, name)
        VALUES ($1, $2, $3)
        RETURNING *
      `, values)
      .then(data => {
        const items = data.rows;
        res.json({ items });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      })
    };
    exports.addItem = addItem;

    //add an endpoint for editing item name
    const editItem = function(item) {
      const values = [req.body.name, req.params.id]
      return pool
      .query(`UPDATE items
        SET name =$1
        WHERE items.id = $2
        `, values)
        .then(data => {
          const items = data.rows;
          res.json({ items });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        })
      };
      exports.editItem = editItem;

      //add an endpoint for deleting item
      