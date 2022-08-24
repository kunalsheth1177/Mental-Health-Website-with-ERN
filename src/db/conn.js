const mongoose = require("mongoose");
//creating a data base
mongoose.connect("mongodb://localhost:27017/king",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((errpr)=>{
    console.log(error);

})