const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");


const app = express();
const PORT = 3000;


// PUBLIC
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));


// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// ROUTES
const homeRoutes = require("./routes/home");
const downloadsRoutes = require("./routes/downloads");
const aboutRoutes = require("./routes/about");
const loginRoutes = require("./routes/login");
const Media = require("./models/Media");


// USE ROUTES
app.use(session({
    secret: "noxzon_secret",

    resave: false,

    saveUninitialized: false,

    

    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 5 // 5 anos
    }
}));
app.use((req, res, next) => {

    res.locals.user = req.session.user || null;

    next();

});
app.use(homeRoutes);
app.use(downloadsRoutes);
app.use(aboutRoutes);
app.use(loginRoutes);

// REQUIRES
require("./database/db");


// 404
app.use((req, res) => {
    res.status(404).render("pages/404");
});


app.listen(PORT, () => {
    console.log(`Noxzon rodando em http://localhost:${PORT}`);
});