const express=require("express")
const dotenv=require("dotenv")
const morgan=require("morgan")
const { connectDB } = require("./config/db")
const {authRouter}=require("./routes/authRoute")
const cors=require("cors")
const app=express()

dotenv.config()
connectDB()
//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))
//routes
app.use("/api/v1/auth",authRouter)

//rest api
app.get("/",(req,res)=>{
    res.send("<h1>WELCOME TO HELLOKART</h1>")
})

const PORT=process.env.PORT||8080;

app.listen(PORT,()=>{
    console.log(`app runing on post ${PORT}`)
})