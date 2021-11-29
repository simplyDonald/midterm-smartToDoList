const bcrypt = require("bcrypt");

module.exports = function (router, database) {
  //create a new user
  router.post("/register", (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    database
      .addUser(user)
      .then((user) => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.userId = user.id;
        res.send("User created!");
      })
      .catch((e) => res.send(e));
  });
  //check if a user exists with a given username and password
  const login = function (email, password) {
    return database.getUserWithEmail(email).then((user) => {
      if (bcrypt.compareSync(password, user.password)) {
        return user;
      }
      return null;
    });
  };
  exports.login = login;

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    login(email, password)
      .then((user) => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.userId = user.id;
        res.send({ user: { name: user.name, email: user.email, id: user.id } });
      })
      .catch((e) => res.send(e));
  });
  //check to see if user is logged in
  router.get("/me", (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.send({ message: "not logged in" });
      return;
    }
    database.getUserWithId(userId)
      .then((user) => {
        if (!user) {
          res.send({ error: "no user with that id" });
          return;
        }

        res.send({ user: { name: user.name, email: user.email, id: userId } });
      })
      .catch((e) => res.send(e));
  });

   //log user out
   router.post("/logout", (req, res) => {
    req.session.userId = null;
    res.send({});
  });

  //user adds item to todolist
  router.post("/:user_id/add_item", (req,res) => {
    const item = req.body
    database.addItem(item)
      .then((res) => {
        if(!item){
          res.send({error: "no item in body"})
          return;
        }
        res.send(item);
      })
      .catch((e) => res.send(e));
  })
  //





  return router;
};
