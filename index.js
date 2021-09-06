const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users")
const PORT = process.env.PORT || 8800

dotenv.config();

const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("Mongo DB Connected!")
}).catch((err)=>console.log(err));

app.use("/api/pins",pinRoute)
app.use("/api/users",userRoute)

app.listen(PORT,() => {
    console.log("Backend server is running!" )
});