const express = require('express')
const seminarSchema = require('../../database/schemas/seminar.schema')

const app = express()

app.get('/:id', async (req, res) => {
    try {
        if (req.params.id) {
            const seminarId = await seminarSchema.find({_id: req.params.id})
            return res.json(seminarId)
        } else {
            const data = await seminarSchema.find().limit(20)
            return res.json(data).status(200)
        }
    } catch (err) {
        return res.status(400).send(err)
    }
})

module.exports = app