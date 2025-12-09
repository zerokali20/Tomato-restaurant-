import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"

dotenv.config()


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();

app.get("/",(req,res)=>{
	res.send("API Working")
})

app.listen(port,()=>{
	console.log(`Server Strated on http://localhost:${port}`)
})




