
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
  .then((result) => {
    return result.rows[0]})
  .catch((err) => {
    console.log(err.message);
  });
}
exports.getUserWithId = getUserWithId;
// //return all items in a list for given user
// const allItemsForUser = async function(user,db) {
//   const category_id = 101
//   const values = [category_id, user]
//   const userItems = await db
//   .query ((`SELECT *
//   FROM items
//   WHERE category_id = $1
//   AND user_id = $2
//   `, values))
//   return userItems;
// }
// exports.userItems= this.userItems;


  //function that matches item to category_id:
  const categorizeItem = function(item,matchKeyWords){
    let category_id;
    let firstWord = item.toLowerCase().split(" ");
    for (let key in matchKeyWords){
      if (matchKeyWords[key].keyWords.includes(firstWord[0])){
        category_id = matchKeyWords[key].categoryId
        break;
      }
    }
    return category_id;
  }
  const matchKeyWords= {
    shopping:{
      keyWords: ["buy", "get", "purchase"],
      categoryId: 104
    },
    films: {
      keyWords: ["watch", "see", "Netflix"],
      categoryId : 101
    },
    books: {
      keyWords: ["read", "study"],
      categoryId : 103
    },
    restaurants:{
      keyWords: ["eat", "drink", "binge"],
      categoryId : 102
    }
      }



//add user to database
const addUser = async function(user,db) {
  const values= [user.email,user.password,user.first_name, user.last_name, user.birth_date]
  const newUser= await db
  .query ((`
    INSERT into users (email, password, first_name, last_name, birth_date)
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *
  `), values)
  return newUser
  };
  exports.addUser = addUser;

  //add item to database
  const addItem = async function(item,user,db) {
  //will hardcode category_id now and later replace with function that will get categoryid
      let category_id = categorizeItem(item,matchKeyWords)
      console.log("category_id", category_id)
      if(!category_id){
        category_id = 105
      }
      const values = [category_id, user, item]
      const newItem = await db
    .query (`INSERT into items (category_id, user_id, name)
        VALUES ($1, $2, $3)
        RETURNING *
      `, values)

    return newItem
  };
    exports.addItem = addItem;








    //all items in movie category
    const getDbItems= function(db,category_id){
      return db
      .query(`SELECT name FROM items WHERE category_id = $1`, [category_id])
      .then((result) => {
        return result.rows})
      .catch((err) => {
        console.log(err.message);
      });
    };
    exports.getDbItems = getDbItems;







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


