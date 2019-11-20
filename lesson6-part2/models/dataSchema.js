const mongoose = require("mongoose")
const Schema = mongoose.Schema

const questionSchema = new Schema({
    questionContent: { type: String },
    questionAnswers: []
}, {
    _id: true,
    timestamps: true
})

let Question = mongoose.model("question", questionSchema)

let newQuestion = Question({
    questionContent: "cau hoi moi",
    questionAnswers: ['yes', `no`, "no"]
})

// 4 imports function of a database: CRUD

// CREATE 
let createData = () => {
    newQuestion.save().then(
        valueReturn => {
            console.log("saved ")
        },
        failValue => {
            console.log("fail ")
        }
    )
}

// READ // RETRIEVE
let readData = () => {
    Question.find({}, (err, data) => {
        console.log(data)
    })
}

// UPDATE
let updateData = () => {

}


// DELTE
let deleteData = () => {

}

module.exports = {
    sampleCreate: createData,
    sampleRead: readData,
    sampleUpdate: updateData,
    sampleDelete: deleteData
}