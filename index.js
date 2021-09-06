

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users")
const PORT = process.env.PORT || 8800



dotenv.config();


const app = express();
app.use(express.json())

app.use(cors({
    origin:"*"
}))

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Mongo DB Connected!")
}).catch((err)=>console.log(err));

mongoose.connection.on('connected',()=>{
    console.log("Mongoose Connected")
})

app.use("/pins",pinRoute)
app.use("/users",userRoute)



app.listen(PORT,"0.0.0.0",() => {
    console.log("Backend server is running!" )
    console.log(PORT);
});