const mongoose = require('mongoose');
const mongouri = "mongodb://0.0.0.0:27017/notebook";

const ConnectToMongo = () =>{
    mongoose.connect(mongouri);
    console.log("Connected to mongoose successfully");
}

module.exports = ConnectToMongo;