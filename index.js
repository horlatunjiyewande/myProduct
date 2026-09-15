require("dotenv").config()

const express = require("express")
const mongoose = require('mongoose')
const productRoute = require("./route/productRoutes")
const userRoute = require("./route/userRoutes")
mongoose.connect(compass_string)

  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection Error; ",err));


const app = express()
const port = 5555
const compass_string = process.env.COMPASS_STRING
 const atlas_string = process.env.ATLAS_STRING

app.use(express.json())


app.get("/",(req,res) =>{
    res.send("Server is active")
})

app.use("/users",userRoute)
app.use("/products", productRoute)
app.listen(port, () =>{
    console.log(`Server is up and running on port : ${port}`)
})
