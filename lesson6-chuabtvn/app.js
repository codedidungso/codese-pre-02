const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const fs = require("fs")




let app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
    res.render("login")
})

app.post("/", (req, res) => {
    let name = req.body.name
    let password = req.body.password
    fs.readFile("data.json", "utf8", (err, docs) => {
        let objData = JSON.parse(docs)
        console.log(objData)
        if (name == objData.userName && password == objData.password) {

            res.send("Dang nhap thanh cong")
        } else {

            res.render("login", {
                loginStatus: "<h3>Dang nhap that bai</h3>"
            })
        }
    })
})

app.listen(5000, (err) => {
    if (err) { console.log(err) } else {
        console.log("App listen at 5000")
    }
})