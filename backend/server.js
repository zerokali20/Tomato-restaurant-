import express from "express"
import cors from "cors"



//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
	res.send("API Working")
})

app.listen(port,()=>{
	console.log(`Server Strated on http://localhost:${port}`)
})


//mongodb+srv://2003zerokali20_db_user:<db_password>@cluster0.z10r6lj.mongodb.net/?

