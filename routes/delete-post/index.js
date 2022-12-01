const express = require('express')
const app = express()
const postSchema = require('../../database/schemas/post.schema')

app.delete('/:id', async (req, res) => {
    try {
        const deletePost = await postSchema.deleteOne({_id: req.params.id})
        res.send('Deleted').status(200)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = app
