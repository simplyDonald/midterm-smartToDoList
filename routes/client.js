/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("index");
  });
  router.get("/:user_id",(req, res) => {
    const user_id = req.params.user_id
    res.render("partials/_userpage");
  });
  router.post("/add/:user_id",(req, res) => {
    // res.send("/");
  });

return router;

};
