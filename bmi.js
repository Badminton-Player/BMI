const express= require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req,res){
   res.sendFile(__dirname + "/bmi.html")
  
})

app.post("/", function(req,res){
    var n1 = parseFloat(req.body.weight)
    var n2 = parseFloat(req.body.height)
    var result = n1 / (n2*n2)
    res.send("Your BMI value is "+ result)
})


app.listen(3000, function(){
    console.log("server started on http://localhost:3000");
})