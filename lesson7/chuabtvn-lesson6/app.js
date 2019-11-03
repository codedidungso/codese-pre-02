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
    let userName = req.body.username
    let password = req.body.password
    fs.readFile("data.json", "utf8", (err, data) => {
        if (err) { console.log(err) } else {
            let objData = JSON.parse(data)
            console.log(data)
            
            if ( userName == objData.userName && password == objData.password){
                res.send("Dang nhap thanh cong")
            } else {
                res.render("login",{
                    loginStatus: "Dang nhap that bai",
                    loginStatusHTML : "<h3 style='color:blue' >Dang nhap that bai r</h3>"
                })
            }
        }

    })

})

app.listen(5000, (err) => {
    if (err) { console.log(err) } else {
        console.log("App listen at 5000")
    }
})