const express = require("express")
const Router = express.Router()
const fs = require("fs")


Router.get("/", (req, res) => {
    let rawData = fs.readFileSync("data.json", "utf8")
    let data = JSON.parse(rawData)
    console.log(data)
    let randomNumber = Math.floor(Math.random() * data.length)
    let question = data[randomNumber]
    res.render("mainPage", {
        questionData: question.questionContent
    })
})

module.exports = Router