const mongoose = require('mongoose')

const Schema = mongoose.Schema


const lectureSchema = new Schema({
    title: {type: String, required: true},
    themes: [{type: Schema.Types.ObjectId, ref: 'Themes'}]
})

const lectureEntity = mongoose.model('Lectures', lectureSchema)

module.exports = lectureEntity
