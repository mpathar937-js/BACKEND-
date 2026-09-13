import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import dns from "dns";

// dns.setDefaultResultOrder("ipv4first");
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

 
dotenv.config({
    path: "./env",
});

connectDB();








/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      dbName: process.env.DB_NAME,
    });
    app.on("error",(err)=>{
      console.error("Error connecting to MongoDB:", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    }
   
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})();*/