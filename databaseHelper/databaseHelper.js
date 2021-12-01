
//Get a single user from the database given their email.
const getUserWithEmail = function(email,db) {
  return db
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
const getUserWithId = function(id,db) {
  return db
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
//return all items in a list for given user
const allItemsForUser = function(user,db) {
  const category_id = 101
  const values = [category_id, user]
  return db
  .query ((`SELECT *
  FROM items
  WHERE category_id = $1
  AND user_id = $2
  `, values))
  .then((result) =>result.rows[0])
  .catch((err) => {
    console.log(err.message);
  })
}
exports.allItemsForUser= allItemsForUser;





//add user to database
const addUser =  function(user,db) {
  const values= [user.email,user.password,user.first_name, user.last_name, user.birth_date]
  return db
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
  const addItem = async function({item,user},db) {
  //will hardcode category_id now and later replace with function that will get categoryid
      const category_id = 101
      const values = [category_id, user, item]
  const newItem = await db
    .query (`INSERT into items (category_id, user_id, name)
        VALUES ($1, $2, $3)
        RETURNING *
      `, values)
    return newItem
  };
    exports.addItem = addItem;








    //all items in move category
    const getDbItems= function(db,category_id){
      return db
      .query(`SELECT name FROM items WHERE category_id = $1`, [category_id])
      .then ((res) => {
        return res.rows
      })
      .catch((err) => {
        console.log(err.message);
      });
    };
    exports.allMovies = allMovies;







    //add an endpoint for editing item name
    const editItem = function(item, name,db) {
      const values = [name, item]
      return db
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
      const deleteItem = function(item,db) {
        return db
        .query(`DELETE FROM items
          WHERE items.id = $1
          `, [item])
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
        exports.deleteItem = deleteItem


