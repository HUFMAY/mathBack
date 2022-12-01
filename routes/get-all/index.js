const express = require('express')
const postSchema = require('../../database/schemas/post.schema')

const app = express()

app.get('/', async (req, res) => {
    const data = await postSchema.find()
    res.send(data).status(200)
})

module.exports = app