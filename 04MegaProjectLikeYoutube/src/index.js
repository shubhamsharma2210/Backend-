import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();
// 1 approach
/*
import express from 'express'

const app = express()

;( async() => {
    try {
       const dataConnection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on('error aa gya ji', (error) => {
        console.log(error,'eroor');
       })

       app.listen(process.env.PORT,() => {
        console.log(`server listening on PORT NO. ${process.env.PORT}`)
       })
    } catch (error) {
        console.log('error',error)
    }
})()
*/
