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
    let rawData = fs.readFileSync("data.json","utf8")
    let data = JSON.parse(rawData)
    console.log(data)
    let randomNumber = Math.floor(Math.random() * data.length)
    let question = data[randomNumber]    
    res.render("mainPage",{
        questionData : question.questionContent
    })
})

app.get("/ask", (req, res) => {

    res.render("askPage")
})



app.post("/ask", (req, res) => {
    let question = req.body.question
    let data

    // try {
    //     let rawData = fs.readFileSync("data.json", "utf8")
    //     let data = JSON.parse(rawData)
    //     let newQuestion = {
    //         id: data.length,
    //         questionContent: question,
    //         questionAnswer: []
    //     }
    //     data.push(newQuestion)
    //     let savedData = JSON.stringify(data)
    //     fs.writeFile("data.json", savedData, (err) => {
    //         if (err) { console.log(err) } else {
    //             console.log("Saved")
    //             res.render("askPage")
    //         }
    //     })
    //     // Code them o day
    // } catch (error) {
    //     let data = []
    //     let newQuestion = {
    //         id: 0,
    //         questionContent: question,
    //         questionAnswer: []
    //     }
    //     data.push(newQuestion)
    //     let savedData = JSON.stringify(data)
    //     fs.writeFile('data.json', savedData, (err) => {
    //         if (err) { console.log(err) } else {
    //             console.log("Saved")
    //             res.render('askPage')
    //         }
    //     })

    // }
    try {
        let rawData = fs.readFileSync("data.json", "utf8")
        data = JSON.parse(rawData)
    } catch (error) {
        data = []

    } finally {
        let newQuestion = {
            id: data.length,
            questionContent: question,
            questionAnswer: []
        }
        data.push(newQuestion)
        savedData = JSON.stringify(data)
        fs.writeFile("data.json",savedData,(err) => {
            if (err) {console.log(err)} else {
                console.log("Saved")
                res.render("askPage")
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
