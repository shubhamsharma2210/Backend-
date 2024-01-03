import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,() => {
    console.log('server is running at port 8000')
    app.on('coming error', (error) => {
      console.log('throw error',error)
    })
  })
})
.catch((error) => console.log('database connction is failed',error))
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
