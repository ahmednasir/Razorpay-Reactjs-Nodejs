const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json({ extended: false }));
app.use(cors())

app.use("/payment", require("./routes/payment"));

app.listen(port, () => console.log(`server started on port ${port}`));