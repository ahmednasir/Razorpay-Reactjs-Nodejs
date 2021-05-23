const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');


const port = process.env.PORT || 5000;

// middlewares
app.use(express.json({ extended: false }));
app.use(cors())

// mongodb
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0-zakdw.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log("Connected");
    }
);

app.use("/payment", require("./routes/payment"));

app.listen(port, () => console.log(`server started on port ${port}`));