const  express = require ("express")
const  cors = require("cors")
require('dotenv').config()
const connectDB = require ('./config/db')
const router = require('./routes')

const cookieParser = require('cookie-parser');

 

const app = express() ;
app.use(cookieParser());
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json(({ limit: '50mb' })))
app.use(express.urlencoded({ limit: '50mb', extended: true }));  // <-- Add this to handle JSON requests
app.use("/api",router)


const port =   process.env.PORT||  8081
connectDB().then(()=>{
    app.listen(port,()=>{
        console.log("connect to db")
        console.log(`server  is running  on  ${port}`)
    })
})
