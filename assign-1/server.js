var express = require("express")
const fs = require("fs")
var app = express()
var PORT = 8080
var router = express.Router()
app.use(express.json())
router.get("/",function(req,res,next){
    console.log("Requesting Movies")
    try{
        const data = fs.readFileSync("./movies.json")
        res.send(data);
    }
    catch(err){
        res.send(err.message)
    }
})
router
app.use("/movies",router)
// app.post("/",(req,res)=>{
        const data = req.body()
        
// })
app.listen(PORT,function(err){
    if(!err) console.log("Server Running on Port",PORT)
    else console.log(err)
})
