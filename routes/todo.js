

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/:user_id", (req, res) => {
    db.query(`SELECT *
    FROM items
    JOIN users ON items.user_id = users.id
    JOIN categories ON items.category_id= categories.id
    WHERE user_id = ${req.params.user_id}
    `)
      .then(data => {
        const items = data.rows;
        res.json({ items });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

    })

    router.post("/:user_id", (req, res) => {
      //add a todo item to database
      //possibly use req.sessions instead of req.params?
      //will hardcode category_id now and later replace with function that will get categoryid
        const category_id = 101
        const values = [category_id, req.params.user_id, req.body.name]
        db.query(`INSERT into items (category_id, user_id, name)
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
      });
    })
    //add an endpoint for editing item name
    router.post("/:id", (req,res) =>{
      const values = [req.body.name, req.params.id]
        db.query(`UPDATE items
        SET name =$1
        WHERE items.id = $2



        `)




    })






      // router.get("/:user_id", (req, res) => {
      //   db.query(`SELECT * FROM items WHERE user_id = ${req.params.user_id}`)
      //     .then(data => {
      //       const users = data.rows;
      //       res.json({ users });
      //     })
      //     .catch(err => {
      //       res
      //         .status(500)
      //         .json({ error: err.message });
      //     });

  return router;

}
