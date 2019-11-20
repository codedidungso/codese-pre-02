const express = require("express");
const Router = express.Router();
const fs = require("fs");
const {
  sampleRead,
  asyncReadData,
  updateByID
} = require("../controllers/dataController");

Router.get("/", (req, res) => {
  // let rawData = fs.readFileSync("data.json", "utf8")
  // let data = JSON.parse(rawData)
  // console.log(data)
  // let randomNumber = Math.floor(Math.random() * data.length)
  // let question = data[randomNumber]

  let callback = function(data) {
    res.render("mainPage", {
      questionData:
        data[Math.floor(Math.random() * data.length)].questionContent
    });
  };
  sampleRead(callback);
});

Router.get("/cauhoingaunhien", async (req, res) => {
  let data = await asyncReadData();
  let randomData = data[Math.floor(Math.random() * data.length)];
  console.log(randomData._id)
  res.render("mainPage", {
    questionData: randomData.questionContent,
    id: randomData._id
  });
});

Router.get("/yes/:id", async (req, res) => {
  let id = req.params.id;
  await updateByID(id, "yes");
  res.redirect("/cauhoingaunhien");
});

Router.post("/no", async (req, res) => {
  let id = req.body.id;
  console.log("IDENTITY: ", id);
  await updateByID(id, "no");
  res.redirect("/cauhoingaunhien");
});

// ES6: Map, Reduce, Filter
// let answer = ["yes", "no"];
// answer.map( e => {
//   Router.post(`/${e}`, async (req, res) => {
//     let id = req.body.id;
//     await updateByID(id, `${e}`);
//     res.redirect("/cauhoingaunhien");
//   });
// });

module.exports = Router;
