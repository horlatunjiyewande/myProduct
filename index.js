const express = require("express")
const mongoose = require('mongoose')
const productRoute = require("./route/productRoutes")
const userRoute = require("./route/userRoutes")
mongoose.connect("mongodb://localhost:27017/cohort8_db")

  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection Error; ",err));


const app = express()
const port = 5555
// const compass_string = "mongodb://localhost:27017/"
// const atlas_string = "mongodb+srv://horlatunjiyewande_db_user:yewande02sGvPrH4b9tSk00Ok@cluster0.lb1xcsr.mongodb.net/?appName=Cluster0sss"

app.use(express.json())


app.get("/",(req,res) =>{
    res.send("Server is active")
})

app.use("/users",userRoute)
app.use("/products", productRoute)
app.listen(port, () =>{
    console.log(`Server is up and running on port : ${port}`)
})
