const mongoose = require('mongoose')

const Schema = mongoose.Schema


const seminarSchema = new Schema({
    number: {type: String, required: true},
    themes: [{type: Schema.Types.ObjectId, ref: 'Themes'}]
})

const seminarEntity = mongoose.model('Seminars', seminarSchema)

module.exports = seminarEntity
