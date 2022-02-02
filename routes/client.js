/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { promiseImpl } = require('ejs');
const express = require('express');
const { addItem, getDbItems, deleteItem,getUserWithId,editItem, editProfile} = require('../databaseHelper/databaseHelper');
const router  = express.Router();



module.exports = (db) => {

  router.get("/", (req, res) => {
    const templateVars = {user:{}};
    res.render("index", templateVars);
  });

  router.get("/:user_id",(req, res) => {

    Promise.all([getDbItems(db,101), getDbItems (db,102), getDbItems(db,103), getDbItems(db,104), getDbItems(db,105),getUserWithId(1,db)])
      .then((result)=> {
        const templateVars = {user_id:1, movies:result[0], restaurants:result[1], books: result[2], shopping: result[3], other: result[4], user: result[5]};
        res.render("partials/_userpage", templateVars);
  })
      .catch(e => e.message);

  })


  router.post("/:user_id",(req, res) => {
      const item = req.body.item
      const user = 1
      // console.log("item", item, "req.body", req.body)
      addItem(item,user,db)
      .then((result) => {
        if(!item){
          res.send({error: "no item in body"})
          return;
        }
        res.redirect(`/${user}`)
      })
      .catch((e) => res.send(e));

  });

//user can edit item in list
router.post("/edit/:item_id", (req,res) => {
  const name = req.body.name;
  // console.log({name})
  const item = req.params.item_id
  // console.log("id", req.params.item_id)
 editItem(item,name,db)
  .then((response) => {
    if(!item){
      res.send({error: "no item in body"})
      return;
    }
  const user = 1
   res.redirect(`/${user}`);
  })
  .catch((e) => res.send(e));
})
  //edit user profile
  router.post("/edit/profile", (req, res) => {
    const firstName= req.body.name;
    // const firstName = req.body.first_name;
    // const lastName = req.body.last_name;
    // const password = req.body.password
    editProfile(firstName,db)
    .then((response)=>{
    const user = 1;
    res.redirect(`/${user}`);
  })
    .catch((e) => res.send(e));
})




return router;

};
