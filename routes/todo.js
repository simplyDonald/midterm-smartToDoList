const express = require('express');
const router  = express.Router();
const databaseHelper = require("../databaseHelper/databaseHelper")
module.exports = (db) => {
  //display all items for given user:
  router.get("/items", (req,res) => {

    db.query(`
  SELECT * FROM items
  `)
  .then((res)=>{

  })
  .catch((err) => {
    console.log(err.message);
  });

  })

 //user adds item to todolist
 router.post("/:user_id", (req,res) => {
  const user= 1
  const item = req.body.name
  databaseHelper.addItem(item,user,db)
    .then((newItem) => {
      console.log("Database newItem",newItem.rows[0])
      if(!newItem){
        res.send({error: "no item in body"})
        return;
      }
      res.send(newItem.rows[0]);
    })
    .catch((e) => res.send(e));
})
//user can edit item in list
router.post("/edit/:item_id", (req,res) => {
    const name = req.body.name
    // console.log({name})
    const item = req.params.item_id
    // console.log("id", req.params.item_id)
  databaseHelper.editItem(item,name,db)
    .then((res) => {
      if(!item){
        res.send({error: "no item in body"})
        return;
      }
      res.send(item);
    })
    .catch((e) => res.send(e));
})
//user can delete item in list
router.post("/:item_id", (req,res) =>{
  const item = req.params.item_id
  db.deleteItem(item)
  .then((res) =>{
    return;
  })
  .catch((e) => res.send(e));

})
  return router;
}
