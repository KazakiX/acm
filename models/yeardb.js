var mongoose = require('./db')



var years = mongoose.Schema({

    year: {
        type: String,

        required: true
    },


})

module.exports = mongoose.model('Years', years)