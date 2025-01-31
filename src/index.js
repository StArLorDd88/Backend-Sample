// import connectDB from "./db/index.js";
// import dotenv from "dotenv";
// import express from "express";

// const app = express();

// dotenv.config({
//     path: './.env'
// });


// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running at port: ${process.env.PORT || 8000}`);
//     });

//     app.on("error", (error) => {
//       console.error("Server error:", error);
//     });
//   })
//   .catch((error) => {
//     console.error("MONGO DB connection failed !!!", error);
//   });




import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from './app.js'; // Import the app from app.js
  
dotenv.config({
  path: './.env' // Corrected path
});
  
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
});
  
app.on("error", (error) => {
  console.error("Server error:", error);
});
})
.catch((error) => {
  console.error("MONGO DB connection failed !!!", error);
});


















// const app = express();
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error: ", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.log("Error: ", error)
//         throw error
//     }
// })()