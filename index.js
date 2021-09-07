

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

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})

mongoose.connection.on('connected',()=>{
    console.log("Mongoose Connected")
})

app.use("/api/pins",pinRoute)
app.use("/api/users",userRoute)



app.listen(PORT,() => {
    console.log("Backend server is running!" )
    console.log(`The app is running in ${PORT}`);
});
