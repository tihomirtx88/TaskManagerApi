const mongoose = require("mongoose");

const conectionString = `mongodb+srv://bodil4o88:Si2TsWA5ZZAlwdoU@cluster0.b8lw2kg.mongodb.net/Task-Manager?retryWrites=true&w=majority`;

const ConnectDB  = (url) => {
   return mongoose.connect(conectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = ConnectDB;


