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

let updateData = function(newData) {
  // QuestionModel.findByIdAndUpdate // _id
  QuestionModel.update({}, newData).then(
    value => {
      console.log("updated");
    },
    fail => {
      console.log("update fail");
    }
  );
};

let deleteData = id => {
  QuestionModel.deleteOne({ _id: id }, err => {
    console.log(err ? "Loi delete" : "Xoa thanh cong");
  });
};
// 4 imports function of a database: CRUD

async function asyncReadData() {
  let data = await QuestionModel.find({});
  return data;
}

async function updateByID(id, answer) {
  let data = await QuestionModel.find({ _id: id });
  // doan nay dang loi 
  // buon ngu vcl 
  
}

module.exports = {
  sampleCreate: createData,
  sampleRead: readData,
  sampleUpdate: updateData,
  sampleDelete: deleteData,
  asyncReadData: asyncReadData,
  updateByID: updateByID
};
