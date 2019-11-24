const QuestionModel = require("../models/dataSchema");

let createData = function(cauhoi) {
  let newQuestion = QuestionModel({
    questionContent: cauhoi,
    questionAnswers: []
  });
  newQuestion.save().then(
    value => {
      console.log(value);
    },
    fail => {
      console.log(fail);
    }
  );
};

// callback
let readData = function(callback) {
  QuestionModel.find({}, (err, data) => {
    if (err) {
      console.log("ERR: " + err);
      callback({
        questionContent: "Loi k tim thay cau hoi"
      });
    } else {
      console.log("DATA:", data);
      callback(data);
    }
  });

  //   QuestionModel.find({}).then( // Promise
  //     value => {
  //         a = value;
  //     },
  //     fail => {}
  //   );
};

async function asyncReadData() {
  let data = await QuestionModel.find({});
  return data;
}

async function updateByID(id, answer) {
  let data = await QuestionModel.find({ _id: id });
  console.log("recv data from update: ", data);
  data[0].questionAnswers.push(answer);
  QuestionModel.updateOne({ _id: id }, data[0])
    .then(data => {
      console.log("update: ", data);
    })
    .catch(err => {
      console.log("update err: ", err);
    });
}

module.exports = {
  sampleCreate: createData, //
  sampleRead: readData, //
  asyncReadData: asyncReadData, //
  updateByID: updateByID //
};
