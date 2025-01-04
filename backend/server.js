import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
// import { addFood }  from ('../controllers/foodController')



// app config
const app = express()
const port = 5000



 //middleware
app.use(express.json())
app.use(cors())

 //db connection 
connectDB();

 //api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

//  Router.post('/add/food', addFood)
//  module.exports = router;

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})



// mongodb+srv://greatstack:priyankac@cluster0.cotjy.mongodb.net/?

