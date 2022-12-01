const express = require('express')
const app = express()
const seminarSchema = require('../../database/schemas/seminar.schema')

app.delete('/:id', async (req, res) => {
    try {
        const deleteSeminar = await seminarSchema.deleteOne({_id: req.params.id})
        res.send('Deleted').status(200)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = app
