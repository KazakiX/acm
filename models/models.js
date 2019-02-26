var mongoose = require('./db')



var models = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,

    },
    detail: {
        type: String,

    },
    others: {
        type: String,
        // 注意：这里不要写 Date.now() 因为会即刻调用
        // 这里直接给了一个方法：Date.now
        // 当你去 new Model 的时候，如果你没有传递 create_time ，则 mongoose 就会调用 default 指定的Date.now 方法，使用其返回值作为默认值

    },
    year: {
        type: String,
        default:'2017'
    },
    imgname: {
        type: String
    }

})

module.exports = mongoose.model('Models', models)