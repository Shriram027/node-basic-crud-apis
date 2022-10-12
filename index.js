const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Ram:ramram@cluster0.vlfcphf.mongodb.net/?retryWrites=true&w=majority")
.then(result=>{
    console.log("Database has been connected");
})
.catch(error=>{
    console.log("Unable to connect from database");
});

const cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const userRouter = require("./Routes/user.routes");
app.use("/user",userRouter);

app.listen(port,()=>{
    console.log("Server is running on port no. : "+port);
})