import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/authroutes.js"
import connectToMongoDB from "./db/connectMongoDB.js";



const app = express();
const PORT  =process.env.PORT ||5000;

dotenv.config();

app.use(express.json());  // to parse the incoming requests with json payloads(from req.body).


app.use("/api/auth",authRoutes)



app.listen(PORT,()=>{
    connectToMongoDB();
  console.log(`server is running on port ${PORT}`)});
