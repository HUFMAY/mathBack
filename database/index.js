const mongoose = require('mongoose')

const startDataBase = async () => {
    try {
        await mongoose.connect("mongodb+srv://solugezero:ps2021742@cluster0.uvz94yn.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to mongo");
    } catch (err) {
        console.log(err);
    }
};
module.exports = startDataBase