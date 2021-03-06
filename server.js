// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const userRoutes = require('./routes/users');
const todoRoutes = require("./routes/todo");
const clientRoutes = require("./routes/client");
// const clientSideJS =  require("./public/scripts/app");
const app = express();
const morgan = require("morgan");
const {getUserWithEmail, getUserWithId, addItem, addUser, deleteItem, editItem, allItemsForUser} = require("./databaseHelper/databaseHelper")



// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

// /api/endpoints
app.use("/api/todo", todoRoutes(db));
app.use('/api/users', userRoutes(db));
app.use('/', clientRoutes(db))



// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// app.get("/", UserRoutes(db));

// app.get("/login", (req, res) => {
//   res.render("login");
// });
// app.get("/user", (req,res) => {


// });


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
