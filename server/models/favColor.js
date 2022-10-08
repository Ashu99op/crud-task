const mongoose = require('mongoose');

const favColorSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    favColor:{
        type: String,
        require: true,
    },
});

const Color = mongoose.model("Color", favColorSchema)
module.exports = Color