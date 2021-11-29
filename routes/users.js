/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  //add user to database
  router.post("/register", (req, res) => {
    const values= [req.body.email,req.body.password,req.body.first_name, req.body.last_name, req.body.birth_date]
    db.query(`
    INSERT into users (email, password, first_name, last_name, birth_date)
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *
    `, values)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  //
  router.post("/login", (req, res) => {
    const values= [req.body.email,req.body.password]
    db.query(`
    SELECT into users (email, password)
    VALUES ($1,$2)
    RETURNING *
    `, values)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });



  return router;
};


