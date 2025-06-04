import express from "express"
import dotenv from "dotenv"
import cookieparser from "cookie-parser"
import cors from "cors"
// import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";
  


import authRoutes from "./routes/auth.routes.js"
dotenv.config();


const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.json());
app.use(cookieparser());
app.use(
    cors({
        origin:["http://localhost:5173"],
        credentials:true
    })
) 

// Routers
app.use("/api/auth",authRoutes);




app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})