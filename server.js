import express from "express"
import add from "./add.js"
import {appendFile,readFile} from "fs/promises"

const app = express()
app.listen(3000)

//create logger using middleware to store in text file
const logger = async (req,res,next)=>{
    const txt = `[${req.ip}] [${req.method} ${req.path}] ${new Date()},\n`
    await appendFile("logs.txt",txt)
    next()
}
app.use(logger) // apply logger middleware globally

app.get("/readlogs",async(req,res)=>{
    const logs = await readFile("logs.txt","utf8")
    res.send(logs)
})

app.get("/add/:x/:y",async(req,res)=>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)

    try{
        const result = await add(x,y)
        res.json(result)
    }catch(e){
        res.json(e)
    }
})