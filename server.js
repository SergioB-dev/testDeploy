const express = require("express");

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get("/", (req, res)=>{
    let message = "This is the first route"
    res.json({message})

})

app.post('/', (req, res)=>{
    console.log(req.body)
})
app.listen(port, ()=>{
    console.log("serveris running on port 3000")
})