const app = require('./app')
const databaseConnection = require('./config/database')
const cloudinary  = require('cloudinary')
require('dotenv').config(); // This will automatically find and load .env in the root directory


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME ,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
}) 

databaseConnection()


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})