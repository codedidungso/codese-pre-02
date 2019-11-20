//khai bao thu vien
const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const fs = require("fs")
const mongoose = require("mongoose")
const dataSchema = require('./models/dataSchema')

mongoose.connect("mongodb://localhost/demoPreWeb",{useNewUrlParser: true},(err) => {
    if (err) {console.log(err)} else {
        console.log("Database Connected")
    }
})

// abc()



let app = express()
const homeRouter = require("./routers/homeRouter")
const askRouter = require("./routers/askRouter")

app.use("/",homeRouter)
app.use("/",askRouter)


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"))
//cai dat hien thi
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")


//khoi tao server
app.listen(7000, (err) => {
    if (err) { console.log(err) } else {
        console.log("App listen at 5000")
    }
})
