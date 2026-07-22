// require mongo --> create schema --> create model --> export model
const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
    },
    musics:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "music",
    }],
    artist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required : true,
    }]
});
// jo model bante hn hum us main jo schema banta hn us ka name hum model ka name dete hn
const albumModel = mongoose.model('album',albumSchema);

module.exports = albumModel;