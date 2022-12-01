const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())



//PORT
const port = process.env.PORT || 3000;



//get-seminars
const getSeminar = require('./routes/get-seminars/index')
app.use('/get-seminar', getSeminar)


//delete postSchemas
const deleteSeminar = require('./routes/delete-seminar/index')
app.use('/delete-seminar', deleteSeminar)


//upload
const uploadFile = require('./routes/upload/index')
app.use('/upload', uploadFile)


//Database connection
const startDataBase = require('./database/index')
startDataBase()

app.listen(port, () => {
    console.log(`listening on port ${port}`);
    console.log(`http://localhost:${port}`);
});

