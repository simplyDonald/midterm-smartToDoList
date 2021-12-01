/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const { addItem,allMovies} = require('../databaseHelper/databaseHelper');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("index");
  });
  router.post("/add/:user_id",(req, res) => {
      const item = req.body.item
      const user = 1
      addItem(item,user,db)
      .then((result) => {
        if(!item){
          res.send({error: "no item in body"})
          return;
        }
        // console.log(result.rows[0])
        // res.send(result.rows[0]);
        res.redirect (`/${user}`)
      })
      .catch((e) => res.send(e));

  });
  router.get("/:user_id",(req, res) => {
      allMovies(db)
      .then((movies) => {
      // console.log("movies",movies)
        const templateVars = {user_id:1, movies}
        res.render("partials/_userpage", templateVars);
    });
  });
  







return router;

};
