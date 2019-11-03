//khai bao thu vien
const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const fs = require("fs")

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))

//cai dat hien thi
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// cai dat duong dan
app.get("/", (req, res) => {

    let data = JSON.parse(fs.readFileSync("data.json", "utf8"))
    let question = data[Math.floor(Math.random() * data.length)]
    console.log(question)
    res.render('mainPage')
})

app.get("/ask", (req, res) => {

    res.render("askPage")
})



app.post("/ask", (req, res) => {
    let question = req.body.question
    try {
        let data = fs.readFileSync("data.json","utf8")
        // Code them o day
    } catch (error) {
        let data = []
        let newQuestion = {
            id : 0 ,
            questionContent: question,
            questionAnswer: []
        }
        data.push(newQuestion)
        let savedData = JSON.stringify(data)
        fs.writeFile('data.json',savedData,(err) => {
            if (err) {console.log(err)} else {
                console.log("Saved")
                res.render('askPage')
            }
        })

    }

})

//khoi tao server
app.listen(5000, (err) => {
    if (err) { console.log(err) } else {
        console.log("App listen at 5000")
    }
})
