const express = require('express');
const router  = express.Router();

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
 router.post("/add/:user_id", (req,res) => {
  const user= req.sessions.userId
  const item = req.body.name
  db.addItem(item,user)
    .then((res) => {
      if(!item){
        res.send({error: "no item in body"})
        return;
      }
      res.send(item);
    })
    .catch((e) => res.send(e));
})
//user can edit item in list
router.post("/edit/:item_id", (req,res) => {
    const name = req.body.name
    const item = req.params.item_id
    db.editItem(item,name)
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
