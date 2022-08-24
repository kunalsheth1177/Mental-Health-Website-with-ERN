const express =require("express");
const path =require("path");
require("./db/conn");
const User = require("./modles/usermessage");
const hbs = require("hbs");
const app = express();
const port =process.env.PORT || 3000;
//setting the path
const staticpath= path.join(__dirname,"../public");
const partialpath= path.join(__dirname,"../templates/partials");
const templatepath= path.join(__dirname,"../templates/views");
//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/css',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine ","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);
//routing
//app.get(path,callback)
app.get("/",(req,res)=>{
    res.render("index.hbs");
})
app.get("/contact",(req,res)=>{
    res.render("contact.hbs");
})
app.get("/video",(req,res)=>{
    res.render("video.hbs");
})
app.get("/tips",(req,res)=>{
    res.render("tips.hbs");
})
app.get("/consultation",(req,res)=>{
    res.render("consultation.hbs");
})
app.post("/contactus",async(req,res) => {
    try{
        const userData = new  User(req.body);
        await userData.save();
        res.status(201).render("index.hbs");
    }
    catch(error){
        res.status(500).send(error);
    }
})
//server
app.listen(port,()=>{
    console.log(`sever is running at no ${port}`);
})