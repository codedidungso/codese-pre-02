//khai bao thu vien
const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")

let app = express()

app.use(bodyParser.urlencoded({extended:false}))

//cai dat hien thi
app.engine("handlebars",handlebars({defaultLayout: "main"}))
app.set("view engine","handlebars")

// cai dat duong dan
app.get("/", (req,res) => {
    res.render("mainPage")
})

app.get("/ask", (req,res) => {
    
    res.render("askPage")
})

app.post("/ask",(req,res) => {
    let data = req.body.question
    res.send("Ask posted")
    console.log(data)
})

//khoi tao server
app.listen(5000,(err) => {
    if (err) {console.log(err)} else {
        console.log("App listen at 5000")
    }
})
