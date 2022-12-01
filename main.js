const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())




//get-all postSchemas
const getAll = require('./routes/get-all/index')
app.use('/', getAll)

//delete postSchemas
const deletePost = require('./routes/delete-post/index')
app.use('/delete-post', deletePost)

//upload
const uploadFile = require('./routes/upload/index')
app.use('/upload', uploadFile)

//Database connection
const startDataBase = require('./database/index')
startDataBase()

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
    console.log(`http://localhost:${port}`);
});

