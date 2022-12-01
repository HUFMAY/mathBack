const mongoose = require('mongoose')

const Schema = mongoose.Schema


const themeSchema = new Schema({
    title: {type: String, required: true},
    formulas: {type: String, required: true},
    images: [{type: String, required: true}]
})

const themesEntity = mongoose.model('Themes', themeSchema)

module.exports = themesEntity
