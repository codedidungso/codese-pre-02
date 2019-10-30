const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");

let app = express();

let option = {
  defaultLayout: "main"
};
let renders = handlebars(option);
app.engine("handlebars", renders);
app.set("view engine", "handlebars");
// app.set("view engine","ejs") // "reactjs"

// app.engine("handlebars", handlebars({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("trang1");
});

app.get("/info", (req, res) => {
  res.render("trang2");
});

app.use(express.static("public"));

app.listen(5000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("App listen at 5000");
  }
});
