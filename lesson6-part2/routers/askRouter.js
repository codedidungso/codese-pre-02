const express = require("express");
const Router = express.Router();
const fs = require("fs");
const { sampleCreate } = require("../controllers/dataController");

Router.get("/ask", (req, res) => {
  res.render("askPage");
});

Router.post("/ask", (req, res) => {
  console.log(req.body);
<<<<<<< HEAD
  //   sampleCreate(question);
    res.render("mainPage", {
    questionContent: "create cau hoi thanh cong "
  });
=======
  sampleCreate(req.body.question);
  res.redirect("/ask")
>>>>>>> 0b02450a81ae119325b4323d6b651bffa1e95d4d
  // console.log(req.body)
  // let question = req.body.question
  // let data
  // try {
  //     let rawData = fs.readFileSync("data.json", "utf8")
  //     data = JSON.parse(rawData)
  // } catch (error) {
  //     data = []
  // } finally {
  //     let newQuestion = {
  //         id: data.length,
  //         questionContent: question,
  //         questionAnswer: []
  //     }
  //     data.push(newQuestion)
  //     savedData = JSON.stringify(data)
  //     fs.writeFile("data.json",savedData,(err) => {
  //         if (err) {console.log(err)} else {
  //             console.log("Saved")
  //             res.render("askPage")
  //         }
  //     })
  // }
});

module.exports = Router;
