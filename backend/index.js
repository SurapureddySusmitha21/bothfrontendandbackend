import express from "express"
import users from "./user.js"

const app=express()

app.get("/",(req,res)=>{
    res.send()
})

app.get("/api/user",(req,res)=>{
    res.send(users)
})


const port=process.env.PORT || 3000

app.listen(port,(req,res)=>{
    console.log(`serve at http://localhost:${port}`)
})