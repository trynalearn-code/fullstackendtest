import express from "express"
import route from "./routes/userRoute.js"

const app = express()

app.use(express.json())
app.use(route)

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})