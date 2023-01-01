const express = require("express");

const app = express()
app.use(express.json())

app.get("/", (req, res)=>{
    let message = "This is the first route"
    res.json({message})

})

app.post('/', (req, res)=>{
    console.log(req.body)
})
app.listen(3000, ()=>{
    console.log("serveris running on port 3000")
})