const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())



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

