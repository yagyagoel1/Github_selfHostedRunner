const express = require("express")



const app = express()

app.get("/",async(req,res)=>{
	res.send("health check passed")
})

app.listen(3000,()=>{
	console.log("listening on 3000")
})



