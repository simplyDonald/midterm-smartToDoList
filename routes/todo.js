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

//user can delete item in list
router.post("/delete/:item_id", (req,res) =>{
  const item = req.params.item_id
  const user = 1
   console.log("we are here!")
  databaseHelper.deleteItem(item,db)
  .then((result) =>{
    return res.redirect(`/${user}`);
  })
  .catch((e) => res.send(e));

})

 //user adds item to todolist
 router.post("/:user_id", (req,res) => {
  const user= 1
  const item = req.body.name
  databaseHelper.addItem(item,user,db)
    .then((newItem) => {
      if(!newItem){
        res.send({error: "no item in body"})
        return;
      }
      res.send(newItem);
    })
    .catch((e) => res.send(e));
})

  return router;
}
